import { appDirectoryName, fileEncoding } from "@shared/constants"
import { NotesDocument } from "@shared/models"
import { GetNotes, ReadNote, WriteNote } from "@shared/types"
import { readFile, writeFile } from "fs"
import { ensureDir, readdir, stat } from "fs-extra"
import { homedir } from "os"

export const getRootDir = () => {
    return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
    const rootDir = getRootDir()

    await ensureDir(rootDir)

    const notesFileNames = await readdir(rootDir, {
        encoding: fileEncoding,
        withFileTypes: false
    })

    const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

    return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NotesDocument> => {
    const fileStats = await stat(`${getRootDir}/${filename}`)

    return {
        documentID: '',
        title: filename.replace(/\.md$/, ''),
        author: `${homedir()}`,
        lastModified: fileStats.mtimeMs
    }
}

export const readNote: ReadNote = async (filename) => {
    const rootDir = getRootDir()

    return readFile(`${rootDir}/${filename}.md`, 'utf8', (err) => { console.log(err) })
}

export const writeNote: WriteNote = async (filename, content) => {
    const rootDir = getRootDir()

    console.info(`Writing to ${filename}`)
    return writeFile(`${rootDir}/${filename}.md`, content, 'utf8', (err) => { console.log(err) })
}
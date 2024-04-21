import { appDirectoryName, fileEncoding } from "@shared/constants"
import { NotesDocument } from "@shared/models"
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from "@shared/types"
import { dialog } from "electron"
import { ensureDir, readFile, readdir, remove, stat, writeFile } from "fs-extra"
import { homedir } from "os"
import path from "path"

export const getRootDir = () => {
    return `${homedir()}\\${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
    const rootDir = getRootDir()

    await ensureDir(rootDir)

    const notesFileNames = await readdir(rootDir, {
        encoding: fileEncoding,
        withFileTypes: false
    })

    const notes = notesFileNames.filter((fileName) => fileName.endsWith('json'))

    return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NotesDocument> => {
    const fileStats = await stat(`${getRootDir()}\\${filename}`)

    return {
        documentID: '',
        title: filename.replace(/\.json$/, ''),
        author: `${homedir()}`,
        lastModified: fileStats.mtimeMs
    }
}

export const readNote: ReadNote = async (filename) => {
    const rootDir = getRootDir()

    console.info(`Reading from ${filename}`)
    return readFile(`${rootDir}/${filename}.json`, { encoding: fileEncoding })
}

export const writeNote: WriteNote = async (filename, content) => {
    const rootDir = getRootDir()

    console.info(`Writing to ${filename}`)
    return writeFile(`${rootDir}/${filename}.json`, content, { encoding: fileEncoding })
}

export const createNote: CreateNote = async () => {
    const rootDir = getRootDir()

    await ensureDir(rootDir)

    const { filePath, canceled } = await dialog.showSaveDialog({
        title: 'New Document',
        defaultPath: `${rootDir}/NewDocument.json`,
        buttonLabel: 'Confirm',
        properties: [
            'showOverwriteConfirmation'
        ],
        showsTagField: false,
        filters: [
            { name: 'json', extensions: ['json'] }
        ]

    })

    if (canceled || !filePath) {
        console.info('Canceled.')
        return false
    }

    const { name: filename, dir: parentDir } = path.parse(filePath)

    if (parentDir !== rootDir) {
        await dialog.showMessageBox({
            type: 'error',
            title: 'Failed to create document',
            message: `Notes must be saved to ${rootDir}.`
        })

        return false
    }

    console.log(`Creating ${filePath}`)
    await writeFile(filePath, '', err => {
        if (err) { console.error(err) }
    })

    return filename
}

export const deleteNote: DeleteNote = async (filename) => {
    const rootDir = getRootDir()

    const { response } = await dialog.showMessageBox({
        type: 'warning',
        title: 'Deleting document',
        message: 'Are you sure?',
        buttons: ['Yes', 'No'],
        defaultId: 1,
        cancelId: 1
    })

    if (response === 1) {
        console.info('Aborted deletion.')
        return false
    }

    console.info(`Deleting ${filename}`)
    await remove(`${rootDir}\\${filename}.json`)
    return true
}
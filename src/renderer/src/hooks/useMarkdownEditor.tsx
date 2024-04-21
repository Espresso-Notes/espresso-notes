import { MDXEditorMethods } from "@mdxeditor/editor"
import { saveNoteAtom, selectedNoteAtom } from "@renderer/store"
import { Content } from "@shared/models"
import { useAtomValue, useSetAtom } from "jotai"
import { throttle } from "lodash"
import { useRef } from "react"

export const useMarkdownEditor = () => {
    const selectedNote = useAtomValue(selectedNoteAtom)
    const saveNote = useSetAtom(saveNoteAtom)
    const editorRef = useRef<MDXEditorMethods>(null)

    const handleAutoSave = throttle(async (content: Content) => {
        if (!selectedNote) return

        console.log('Saving', selectedNote.title)

        await saveNote(content)
    }, 5000, {
        leading: false,
        trailing: true
    })

    const handleSwitch = async () => {
        if (!selectedNote) return

        handleAutoSave.cancel()

        const content = editorRef.current?.getMarkdown()

        if (content != null) {
            await saveNote(content)
        }
    }

    return {
        selectedNote,
        editorRef,
        handleAutoSave,
        handleSwitch
    }
}
import { notesAtom, selectedNoteIndexAtom } from "@/store"
import { useAtomValue, useAtom } from "jotai"

export const useNotesList = ({onSelect}: {onSelect?: () => void}) => {
    const notes = useAtomValue(notesAtom)

    const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

    const handleNoteSelect = (index: number) => async() => {
        setSelectedNoteIndex(index)

        if(onSelect) {
            onSelect()
        }
    }

    return {
        notes,
        selectedNoteIndex,
        handleNoteSelect
    }
}
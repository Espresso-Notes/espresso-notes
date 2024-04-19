/* eslint-disable prettier/prettier */
import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { SlNote } from 'react-icons/sl'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
    const createEmptyNote = useSetAtom(createEmptyNoteAtom)

    const handleCreation = () => {
        createEmptyNote()
    }

    return (
        <ActionButton onClick={handleCreation} {...props}>
            <SlNote className="w-8 h-6" />
        </ActionButton>
    )
}

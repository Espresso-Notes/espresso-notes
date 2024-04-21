/* eslint-disable prettier/prettier */
import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { BsTrash3 } from 'react-icons/bs'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
    const deleteNote = useSetAtom(deleteNoteAtom)

    const handleDelete = async () => {
        await deleteNote()
    }

    return <ActionButton onClick={handleDelete} {...props}>
        <BsTrash3 className='w-8 h-6' />
    </ActionButton>
}

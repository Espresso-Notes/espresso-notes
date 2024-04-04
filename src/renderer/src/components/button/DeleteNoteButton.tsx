/* eslint-disable prettier/prettier */
import { ActionButton, ActionButtonProps } from '@/components'
import { BsTrash3 } from 'react-icons/bs'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
    return <ActionButton {...props}>
        <BsTrash3 className='w-8 h-6' />
    </ActionButton>
}

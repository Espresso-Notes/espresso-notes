/* eslint-disable prettier/prettier */
import { ActionButton, ActionButtonProps } from '@/components'
import { SlNote } from 'react-icons/sl'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
    return (
        <ActionButton {...props}>
            <SlNote className="w-8 h-6" />
        </ActionButton>
    )
}

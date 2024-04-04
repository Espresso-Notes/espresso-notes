import { ActionButton, ActionButtonProps } from '@/components'
import { MdFormatItalic } from 'react-icons/md'

export const ItalicButton = ({ ...props }: ActionButtonProps) => {
    return (
        <ActionButton {...props}>
            <MdFormatItalic className="w-6 h-4" />
        </ActionButton>
    )
}
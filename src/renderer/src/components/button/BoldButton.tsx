import { ActionButton, ActionButtonProps } from '@/components'
import { MdFormatBold } from 'react-icons/md'

export const BoldButton = ({ ...props }: ActionButtonProps) => {
    return (
        <ActionButton {...props}>
            <MdFormatBold className="w-6 h-4" />
        </ActionButton>
    )
}
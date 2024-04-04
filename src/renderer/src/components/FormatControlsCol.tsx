import { BoldButton, ItalicButton } from '@/components'
import { ComponentProps } from 'react'

export const FormatControlsCol = ({ ...props }: ComponentProps<'div'>) => {
    return (
        <div {...props}>
            <BoldButton />
            <ItalicButton />
        </div>
    )
}
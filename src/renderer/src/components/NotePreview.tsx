import { cn, formatDate } from "@renderer/utils"
import { documentID } from "@shared/models"
import { ComponentProps } from 'react'

export type NotePreviewProps = documentID & {
    isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
    title,
    content,
    lastModified,
    isActive = false,
    className,
    ...props
}: NotePreviewProps) => {
    const date = formatDate(lastModified)
    return (
        <div
            className={cn('p-3 mt-4 cursor-pointer rounded-full transition-colors duration-300',
                {
                    'bg-stone-600': isActive,
                    'bg-stone-700': !isActive,
                    'hover:bg-stone-500': !isActive
                },
                className
            )
            }
            {...props}
        >
            <h3 className="font-bold mx-4 truncate">{title}</h3>
            <span className="text-xs mx-6">{date}</span>
        </div>
    )
}
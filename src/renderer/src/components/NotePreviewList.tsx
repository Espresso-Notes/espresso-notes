/* eslint-disable prettier/prettier */
import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { isEmpty } from "lodash"

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
    const {notes, selectedNoteIndex, handleNoteSelect} = useNotesList({})

    if(!notes) return null

    if (isEmpty(notes)) {
        return (
            <ul className={twMerge('text-center p-2', className)} {...props}>
                <span>Add a note to get started</span>
            </ul>
        )
    }
    return (
        <ul className={ className } {...props}>
            {notes.map((note, index) => (
                <NotePreview
                    key={note.title + note.lastModified}
                    isActive = {selectedNoteIndex === index}
                    onClick = {handleNoteSelect(index)}
                    {...note}
                />
            ))
            }
        </ul>
    )
}
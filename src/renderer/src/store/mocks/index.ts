/* eslint-disable prettier/prettier */
import { NotesDocument } from '@shared/models'

export const notesMock: NotesDocument[] = [
  {
    documentID: '1',
    title: 'Hello',
    author: 'EspressoNotes',
    lastModified: new Date().getTime()
  },
  {
    documentID: '2',
    title: 'My Note',
    author: 'EspressoNotes',
    lastModified: new Date().getTime()
  },
  {
    documentID: '3',
    title: 'Another Note',
    author: 'EspressoNotes',
    lastModified: new Date().getTime()
  }
]

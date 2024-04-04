/* eslint-disable prettier/prettier */
import { documentID } from '@shared/models'

export const notesMock: documentID[] = [
  {
    title: 'Hello',
    lastModified: new Date().getTime()
  },
  {
    title: 'My Note',
    lastModified: new Date().getTime()
  },
  {
    title: 'Another Note',
    lastModified: new Date().getTime()
  }
]

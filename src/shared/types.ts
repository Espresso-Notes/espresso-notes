import { Content, NotesDocument } from "./models";

export type GetNotes = () => Promise<NotesDocument[]>
export type ReadNote = (title: NotesDocument['title']) => Promise<Content>
export type WriteNote = (title: NotesDocument['title'], content: Content) => Promise<void>
export type CreateNote = () => Promise<NotesDocument['title'] | false>
export type DeleteNote = (title: NotesDocument['title']) => Promise<boolean>
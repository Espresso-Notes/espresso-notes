import { Content, NotesDocument } from "./models";

export type GetNotes = () => Promise<NotesDocument[]>
export type ReadNote = (title: NotesDocument['title']) => Promise<void>
export type WriteNote = (title: NotesDocument['title'], content: Content) => Promise<void>
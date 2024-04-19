import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, InsertImage, MDXEditor, UndoRedo, codeBlockPlugin, codeMirrorPlugin, headingsPlugin, imagePlugin, listsPlugin, markdownShortcutPlugin, quotePlugin, toolbarPlugin } from "@mdxeditor/editor"
import { useMarkdownEditor } from "@renderer/hooks/useMarkdownEditor"

export const MarkdownEditor = () => {
    const { editorRef, selectedNote, handleAutoSave } = useMarkdownEditor()

    if(!selectedNote) return null

    return (
        <MDXEditor
            ref={editorRef}
            key={selectedNote.title}
            markdown={selectedNote.content}
            onChange={handleAutoSave}
            plugins={[
                codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                codeMirrorPlugin({
                    codeBlockLanguages: {
                        js: 'JavaScript',
                        css: 'CSS'
                    }
                }),
                headingsPlugin(),
                imagePlugin(),
                listsPlugin(),
                markdownShortcutPlugin(),
                quotePlugin(),
                toolbarPlugin({
                    toolbarContents: () => (
                        <>
                            {' '}
                            <UndoRedo />
                            <InsertImage />
                            <BlockTypeSelect />
                            <BoldItalicUnderlineToggles />
                            <CodeToggle />
                        </>
                    )
                })
            ]}
            contentEditableClassName="outline-none min-h-screen max-w-none text-lg p-4 caret-stone-100 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
        />
    )
}
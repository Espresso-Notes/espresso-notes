import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, InsertImage, MDXEditor, UndoRedo, codeBlockPlugin, codeMirrorPlugin, headingsPlugin, imagePlugin, listsPlugin, markdownShortcutPlugin, quotePlugin, toolbarPlugin } from "@mdxeditor/editor"

export const MarkdownEditor = () => {
    return (
        <MDXEditor
            markdown={'# Welcome to Espresso Notes'}
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
            contentEditableClassName="outline-none min-h-screen max-w-none text-lg p-4 caret-stone-100 prose prose-invert"
        />
    )
}
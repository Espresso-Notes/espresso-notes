import { ActionButtonsRow, Content, MarkdownEditor, NotePreviewList, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar className="bg-stone-800 p-1">
        <ActionButtonsRow className="flex justify-around mt-1" />
        <NotePreviewList className="m-1" />
      </Sidebar>

      <Content className="border-l-2 border-l-neutral-600 bg-neutral-900 p-2">
        <MarkdownEditor></MarkdownEditor>
      </Content>
    </RootLayout>
  )
}

export default App

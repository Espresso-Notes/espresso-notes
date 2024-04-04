import { ActionButtonsRow, Content, FormatControls, NotePreviewList, RootLayout, Sidebar } from '@/components'
import { FormatControlsCol } from './components/FormatControlsCol'

function App() {
  return (
    <RootLayout>
      <Sidebar className="bg-stone-800 p-1">
        <ActionButtonsRow className="flex justify-around mt-1" />
        <NotePreviewList className="m-1"/>
      </Sidebar>

      <Content className="border-l-2 border-l-neutral-600 bg-neutral-900 p-4">Content</Content>

      <FormatControls>
        <FormatControlsCol className='m-1 space-y-3' />
      </FormatControls>
    </RootLayout>
  )
}

export default App

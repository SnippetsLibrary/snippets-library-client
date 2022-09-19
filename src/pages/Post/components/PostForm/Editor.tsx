import MDEditor from '@uiw/react-md-editor'

export const Editor = ({
  value,
  onChange,
  preview,
}: {
  value: string
  onChange: (str: string) => void
  preview?: boolean
}) => {
  // const [value, setValue] = useState('**Hello world!**')
  return (
    <div className='container'>
      {preview ? (
        <MDEditor.Markdown
          source={value}
          style={{ whiteSpace: 'pre-wrap', backgroundColor: 'transparent' }}
        />
      ) : (
        <MDEditor
          defaultTabEnable={true}
          onFocus={() => {
            ;(
              document.getElementsByClassName('w-md-editor-text-input').item(0) as HTMLElement
            )?.focus()
          }}
          value={value}
          onChange={(v) => onChange(v as string)}
        />
      )}
    </div>
  )
}

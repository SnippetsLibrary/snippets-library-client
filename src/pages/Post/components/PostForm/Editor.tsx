import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

export const Editor = () => {
  const [value, setValue] = useState('**Hello world!**')
  return (
    <div className='container'>
      <MDEditor value={value} onChange={(v) => setValue(v as string)} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}

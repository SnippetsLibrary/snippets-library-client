import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { PostFormI } from './data'
import { Editor } from './Editor'

import * as S from './styles'

export const PostForm = ({
  initialData,
  onSubmit,
}: {
  initialData: PostFormI
  onSubmit: (values: PostFormI) => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormI>()
  const submit = (data: PostFormI) => onSubmit({ ...data, text: text })

  const [text, setText] = useState<string>(initialData.text)

  return (
    <S.FormBox>
      <S.Form onSubmit={handleSubmit(submit)}>
        <S.FormBlock>
          <label>Title</label>
          <S.Input
            {...register('title', { required: true })}
            defaultValue={initialData.title}
            autoFocus
          />
          {errors.title && <span>This field is required</span>}
        </S.FormBlock>
        <S.FormBlock>
          <label>Subtitle</label>
          <S.Input defaultValue={initialData.subtitle} {...register('subtitle')} />
        </S.FormBlock>
        <S.FormBlock>
          <Editor value={text} onChange={(value) => setText(value)} />
        </S.FormBlock>
        <S.FormBlock>
          <S.ButtonBox>
            <S.SubmitInput type='submit' value='Submit' />
          </S.ButtonBox>
        </S.FormBlock>
      </S.Form>
    </S.FormBox>
  )
}

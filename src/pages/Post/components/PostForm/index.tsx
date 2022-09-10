import { useForm } from 'react-hook-form'

import { PostFormI } from './data'

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
  const submit = (data: PostFormI) => onSubmit(data)

  return (
    <S.FormBox>
      <S.Form onSubmit={handleSubmit(submit)}>
        <S.FormBlock>
          <input
            {...register('title', { required: true })}
            defaultValue={initialData.title}
            autoFocus
          />
          {errors.title && <span>This field is required</span>}
        </S.FormBlock>
        <S.FormBlock>
          <textarea defaultValue={initialData.subtitle} {...register('subtitle')} />
        </S.FormBlock>
        <S.FormBlock>
          <textarea defaultValue={initialData.text} {...register('text')} />
        </S.FormBlock>
        <S.ButtonBox>
          <S.SubmitInput type='submit' value='Submit' />
        </S.ButtonBox>
      </S.Form>
    </S.FormBox>
  )
}

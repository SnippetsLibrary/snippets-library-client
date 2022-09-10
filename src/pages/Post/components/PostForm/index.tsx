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
            {...register('header', { required: true })}
            defaultValue={initialData.header}
            autoFocus
          />
          {errors.header && <span>This field is required</span>}
        </S.FormBlock>
        <S.FormBlock>
          <textarea defaultValue={initialData.subheader} {...register('subheader')} />
        </S.FormBlock>
        <S.FormBlock>
          <textarea defaultValue={initialData.text} {...register('text')} />
        </S.FormBlock>
        <S.ButtonBox>
          <S.SubmitInput type='submit' value='Create' />
        </S.ButtonBox>
      </S.Form>
    </S.FormBox>
  )
}

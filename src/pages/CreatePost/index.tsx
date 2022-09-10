import * as S from './styles'

import { PostForm } from '../Post/components/PostForm'
import { PostFormI } from '../Post/components/PostForm/data'

const initData: PostFormI = {
  header: '',
  subheader: '',
  text: '',
}

export const CreatePost = () => {
  return (
    <S.Box>
      <S.Heading>Create Post</S.Heading>
      <PostForm initialData={initData} onSubmit={(data) => console.log(data)} />
    </S.Box>
  )
}

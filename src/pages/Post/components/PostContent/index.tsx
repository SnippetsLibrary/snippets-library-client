import * as S from './styles'

import { Editor } from '../PostForm/Editor'

import { I_Post } from 'src/typings/interfaces/post'

export const PostContent = ({ post }: { post: I_Post }) => {
  console.log(post)
  return (
    <S.PostContent>
      <Editor value={post.text as string} onChange={() => null} preview />
    </S.PostContent>
  )
}

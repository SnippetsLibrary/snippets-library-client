import * as S from './styles'

import { I_Post } from 'src/typings/interfaces/post'

export const PostContent = ({ post }: { post: I_Post }) => {
  return <S.PostContent>{post.text}</S.PostContent>
}

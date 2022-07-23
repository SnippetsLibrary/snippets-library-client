import { LinearProgress } from '@mui/material'
import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const Post = () => {
  const [post, setPost] = useState<I_Post>()

  const params = useParams()

  const {
    data: getPostData,
    isSuccess: getPostDataSuccess,
    isLoading: getPostDataLoading,
  } = postAPI.useGetPostQuery(params.postId!)

  useLayoutEffect(() => {
    if (getPostData) setPost(getPostData.payload)
  }, [getPostData])

  if (getPostDataLoading)
    return (
      <S.PostBox>
        <LinearProgress />
      </S.PostBox>
    )

  if (post && getPostData && getPostDataSuccess)
    return (
      <S.PostBox>
        <S.Inner>
          <PostHeader post={post} />
          <PostContent post={post} />
        </S.Inner>
      </S.PostBox>
    )

  return (
    <S.PostBox>
      <LinearProgress />
    </S.PostBox>
  )
}

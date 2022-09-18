import { LinearProgress } from '@mui/material'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const Post = () => {
  const [post, setPost] = useState<I_Post>()

  const params = useParams()

  const [redirect, setRedirect] = useState(false) // to prevent useGerPostQuery from triggering
  const onRedirect = () => {
    setRedirect(true)
  }

  const {
    data: getPostData,
    isSuccess: getPostDataSuccess,
    isLoading: getPostDataLoading,
  } = postAPI.useGetPostQuery(params.postId!, { skip: redirect })

  useLayoutEffect(() => {
    if (getPostData) setPost(getPostData.payload)
  }, [getPostData])

  if (redirect) return <Navigate to={`/search/posts/`} />

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
          <PostHeader post={post} onRedirect={onRedirect} />
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

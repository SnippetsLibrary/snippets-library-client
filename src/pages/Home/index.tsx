import { LinearProgress } from '@mui/material'
import { useLayoutEffect, useState } from 'react'

import { Post } from './components/Post'
import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const Home = () => {
  const [posts, setPosts] = useState<I_Post[]>()

  const {
    data: getPostsData,
    isSuccess: getPostsDataSuccess,
    isLoading: getPostsDataLoading,
  } = postAPI.useGetPostsQuery()

  useLayoutEffect(() => {
    if (getPostsData && getPostsData.payload && getPostsDataSuccess)
      setPosts(getPostsData.payload.docs)
  }, [getPostsData, getPostsDataSuccess])

  if (getPostsDataLoading) {
    return (
      <S.Home>
        <LinearProgress />
      </S.Home>
    )
  }

  if (posts && getPostsDataSuccess)
    return (
      <S.Home>
        <S.Inner>
          <Post posts={posts} />
        </S.Inner>
      </S.Home>
    )

  return (
    <S.Home>
      <LinearProgress />
    </S.Home>
  )
}

import { useLayoutEffect, useState } from 'react'

import { Post } from './components/Post'
import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const Home = () => {
  const [posts, setPosts] = useState<I_Post[]>()

  const { data: getPostsData, isSuccess: getPostsDataSuccess } = postAPI.useGetPostsQuery()

  useLayoutEffect(() => {
    if (getPostsData && getPostsData.payload && getPostsDataSuccess)
      setPosts(getPostsData.payload.docs)
  }, [getPostsData, getPostsDataSuccess])

  console.log(posts)

  if (posts && getPostsDataSuccess)
    return (
      <S.Home>
        <Post posts={posts} />
      </S.Home>
    )

  return <div />
}

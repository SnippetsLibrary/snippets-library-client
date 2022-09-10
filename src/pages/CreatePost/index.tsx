import { useEffect } from 'react'

import { Navigate } from 'react-router-dom'

import * as S from './styles'

import { PostForm } from '../Post/components/PostForm'
import { PostFormI } from '../Post/components/PostForm/data'

import { postAPI } from 'src/services/post'

const initData: PostFormI = {
  title: '',
  subtitle: '',
  text: '',
}

export const CreatePost = () => {
  const [createPost, result] = postAPI.useCreatePostMutation()
  const onPostCreate = (data: PostFormI) => {
    createPost(data)
  }

  useEffect(() => {
    if (result.error) console.log(result.error)
  }, [result])

  if (result.data) return <Navigate to={`/search/posts/${result.data!.payload!._id}`} />

  return (
    <S.Box>
      <S.Heading>Create Post</S.Heading>
      <PostForm initialData={initData} onSubmit={onPostCreate} />
    </S.Box>
  )
}

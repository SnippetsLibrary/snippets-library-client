import { useEffect, useState, useLayoutEffect } from 'react'

import { Navigate, useParams } from 'react-router-dom'

import * as S from './styles'

import { PostForm } from '../Post/components/PostForm'
import { PostFormI } from '../Post/components/PostForm/data'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const UpdatePost = () => {
  const userId = useStoreSelector((state) => state.user.userId)
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

  const [updatePost, result] = postAPI.useUpdatePostMutation()
  const onPostCreate = (data: PostFormI) => {
    if (userId && userId === post!.author._id) updatePost({ id: post!._id, ...data })
    else console.log('Error: User id not found or is not author')
  }

  useEffect(() => {
    if (result.error) console.log(result.error)
  }, [result])

  if (result.data) return <Navigate to={`/search/posts/${result.data!.payload!._id}`} />

  if (post)
    return (
      <S.Box>
        <S.Heading>Update Post</S.Heading>
        <PostForm
          initialData={{
            title: post.title,
            subtitle: post.subtitle || '',
            text: post.text || '',
          }}
          onSubmit={onPostCreate}
        />
      </S.Box>
    )

  return <div>Loading...</div>
}

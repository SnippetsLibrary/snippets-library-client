import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { useEffect } from 'react'

import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const Post = ({ posts }: { posts: I_Post[] }) => {
  const [postVote, { data: postVoteData }] = postAPI.useLazyGetPostVoteQuery()

  const handleUpVote = (postId: string) => () => {
    postVote({
      id: postId,
      poll: 'true',
    })
  }

  const handleDownVote = (postId: string) => () => {
    postVote({
      id: postId,
      poll: 'false',
    })
  }

  useEffect(() => {
    if (postVoteData) console.log(postVoteData)
  }, [postVoteData])

  return (
    <>
      {posts.map((post) => {
        return (
          <S.Post key={post._id}>
            <S.Box>
              <S.PostUserLink href={'/' + post.author.alias}>{post.author.alias}</S.PostUserLink>
            </S.Box>
            <S.ContentBox>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostSubtitle>{post.subtitle}</S.PostSubtitle>
            </S.ContentBox>
            <S.VoteBox>
              <S.VoteButton onClick={handleUpVote(post._id)}>
                <FavoriteIcon />
                <S.VoteLabel>{post.upvotes}</S.VoteLabel>
              </S.VoteButton>
              <S.VoteButton onClick={handleDownVote(post._id)}>
                <HeartBrokenIcon />
              </S.VoteButton>
            </S.VoteBox>
          </S.Post>
        )
      })}
    </>
  )
}

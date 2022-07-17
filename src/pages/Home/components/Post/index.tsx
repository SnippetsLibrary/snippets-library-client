import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { useEffect } from 'react'

import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

enum E_Poll {
  true = 'true',
  false = 'false',
}

export const Post = ({ posts }: { posts: I_Post[] }) => {
  const [postVote] = postAPI.useLazyGetPostVoteQuery()

  const handleVote = (postId: string, pollDes: E_Poll) => () => {
    postVote({
      id: postId,
      poll: pollDes,
    })
  }

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>
      {posts.map((post) => {
        return (
          <S.Post key={post._id}>
            <S.Box>
              <S.PostLink to={'/' + post.author.alias}>{post.author.alias}</S.PostLink>
            </S.Box>
            <S.ContentBox>
              <S.PostTitle>
                <S.PostTitleLink to={`/post/${post._id}`}>{post.title}</S.PostTitleLink>
              </S.PostTitle>
              <S.PostSubtitle>
                <S.PostLink to={`/post/${post._id}`}>{post.subtitle}</S.PostLink>
              </S.PostSubtitle>
            </S.ContentBox>
            <S.VoteBox>
              <S.VoteButton onClick={handleVote(post._id, E_Poll.true)}>
                <FavoriteIcon />
                <S.VoteLabel>{post.upvotes}</S.VoteLabel>
              </S.VoteButton>
              <S.VoteButton onClick={handleVote(post._id, E_Poll.false)}>
                <HeartBrokenIcon />
              </S.VoteButton>
            </S.VoteBox>
          </S.Post>
        )
      })}
    </>
  )
}

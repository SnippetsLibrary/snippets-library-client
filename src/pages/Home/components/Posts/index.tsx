import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone'

import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

enum E_Poll {
  true = 'true',
  false = 'false',
}

export const Posts = ({ posts }: { posts: I_Post[] }) => {
  const [postVote] = postAPI.useGetPostVoteMutation()

  const handleVote = (postId: string, pollDes: E_Poll) => () => {
    postVote({
      id: postId,
      poll: pollDes,
    })
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <S.Post key={post._id}>
            <S.Box>
              <S.PostLink to={'/' + post.author.alias}>{post.author.alias}</S.PostLink>
            </S.Box>
            <S.ContentBoxLink to={`/search/posts/${post._id}`}>
              <S.ContentBox>
                <S.PostTitle>
                  <S.PostTitleLink to={`/search/posts/${post._id}`}>{post.title}</S.PostTitleLink>
                </S.PostTitle>
                <S.PostSubtitle>
                  <S.PostLink to={`/search/posts/${post._id}`}>{post.subtitle}</S.PostLink>
                </S.PostSubtitle>
              </S.ContentBox>
            </S.ContentBoxLink>
            <S.VoteBox>
              <S.VoteButton onClick={handleVote(post._id, E_Poll.true)}>
                {post.vote === 1 ? <FavoriteIcon color='error' /> : <FavoriteTwoToneIcon />}
                <S.VoteLabel>{post.upvotes}</S.VoteLabel>
              </S.VoteButton>
              <S.VoteButton onClick={handleVote(post._id, E_Poll.false)}>
                {post.vote === -1 ? <HeartBrokenIcon color='error' /> : <HeartBrokenTwoToneIcon />}
              </S.VoteButton>
            </S.VoteBox>
          </S.Post>
        )
      })}
    </>
  )
}

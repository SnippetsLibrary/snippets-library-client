import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'
import { useEffect, useState } from 'react'

import { Navigate } from 'react-router-dom'

import { E_PostHeaderButtonsData, postHeaderButtonsData } from './data'
import * as S from './styles'
import { animation } from './variants'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import * as MS from 'src/layouts/styles'
import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export const PostHeader = ({ post, onRedirect }: { post: I_Post; onRedirect: () => void }) => {
  const [menu, setMenu] = useState<boolean>(false)
  const [edit, setEdit] = useState(false)
  const userId = useStoreSelector((state) => state.user.userId)
  const [fetchPostDelete, result] = postAPI.useDeletePostMutation()

  const onPostDelete = () => {
    fetchPostDelete({ id: post._id })
    onRedirect()
  }

  useEffect(() => {
    if (result.data) console.log('redirect to main page')
    if (result.error) console.log('ERROR: ', result.error)
  }, [result])

  const handleMenuToggle = () => {
    setMenu((prev) => !prev)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }

  const PostHeaderButtons = {
    [E_PostHeaderButtonsData.copyUrl]: () => {
      navigator.clipboard.writeText(window.location.href)
      handleMenuClose()
    },
    [E_PostHeaderButtonsData.copyTelegram]: () => {
      handleMenuClose()
    },
  }

  const isAuthor = userId === post.author._id

  if (edit) return <Navigate to={`/posts/update/${post._id}`} />

  return (
    <S.PostHeader>
      <S.PostTitle>{post.title}</S.PostTitle>
      <S.PostButtonGroup>
        <S.PostButton onClick={handleMenuToggle}>
          <ShareTwoToneIcon />
        </S.PostButton>
        {menu && <MS.PopoverOverlay onClick={handleMenuClose} />}
        <S.PostSharePopover animate={menu ? animation.open : animation.closed} variants={animation}>
          <S.PostSharePopoverBox>
            {postHeaderButtonsData.map((button, index) => {
              return (
                <S.PostShareLink key={index} onClick={PostHeaderButtons[button.onClick]}>
                  {button.label}
                </S.PostShareLink>
              )
            })}
          </S.PostSharePopoverBox>
        </S.PostSharePopover>
        {isAuthor && <S.PostButton onClick={() => setEdit(true)}>EDIT</S.PostButton>}
        <hr />
        {isAuthor && <S.PostButton onClick={onPostDelete}>Delete</S.PostButton>}
      </S.PostButtonGroup>
    </S.PostHeader>
  )
}

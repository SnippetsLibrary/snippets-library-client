import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'
import { useState } from 'react'

import { E_PostHeaderButtonsData, postHeaderButtonsData } from './data'
import * as S from './styles'
import { animation } from './variants'

import * as MS from 'src/layouts/styles'
import * as C from 'src/styles/components'
import { I_Post } from 'src/typings/interfaces/post'

export const PostHeader = ({ post }: { post: I_Post }) => {
  const [menu, setMenu] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setMenu((prev) => !prev)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }

  console.log(post)

  const PostHeaderButtons = {
    [E_PostHeaderButtonsData.copyUrl]: () => {
      navigator.clipboard.writeText(window.location.href)
      handleMenuClose()
    },
    [E_PostHeaderButtonsData.copyTelegram]: () => {
      handleMenuClose()
    },
  }

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
      </S.PostButtonGroup>
    </S.PostHeader>
  )
}

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const Content = () => {
  return (
    <S.Content
      initial={{ opacity: 0 }}
      style={{ y: -72 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <S.ContentText>
        <S.Text>Create or find Snippet what you want...</S.Text>
      </S.ContentText>
      <S.TryForFreeLink to={ROUTES.library}>
        <S.Text>Try for free</S.Text>
        <KeyboardArrowRightIcon sx={{ width: '4.6rem', height: '4.6rem' }} />
      </S.TryForFreeLink>
    </S.Content>
  )
}

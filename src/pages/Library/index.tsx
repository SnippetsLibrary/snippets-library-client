import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const Library = () => {
  return (
    <S.Library>
      <S.LibraryInner>
        <S.LibraryMainBox>
          <S.LibraryTitleBox
            initial={{ opacity: 0 }}
            style={{ y: 32 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <S.LibraryTitle>
              Snippets <S.LibraryLabel>Library</S.LibraryLabel>
            </S.LibraryTitle>
          </S.LibraryTitleBox>
          <S.LibraryDescriptionBox
            initial={{ opacity: 0 }}
            style={{ x: 32 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <S.LibraryDescription>
              Here will be some description of this project, just let him wait a bit {'<3'}
            </S.LibraryDescription>
          </S.LibraryDescriptionBox>
          <S.LibraryLink to={ROUTES.docs}>
            Check out the documentation <ArrowForwardIcon />
          </S.LibraryLink>
        </S.LibraryMainBox>
      </S.LibraryInner>
    </S.Library>
  )
}

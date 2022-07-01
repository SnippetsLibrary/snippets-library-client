import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

const boxAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}

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
              Here will be some description of this project, just let him wait a bit. Extend your
              prototypes with code using Code Snippets.
            </S.LibraryDescription>
          </S.LibraryDescriptionBox>
          <S.LibraryLink to={ROUTES.docs}>
            Check out the documentation <ArrowForwardIcon />
          </S.LibraryLink>
        </S.LibraryMainBox>
      </S.LibraryInner>
      <S.LibrarySecondInner>
        <S.LibrarySecondMainBox
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          variants={boxAnimation}
        >
          <S.LibrarySecondTitleBox>
            <S.LibrarySecondTitle>
              Create. <S.LibrarySecondLabel>Explore.</S.LibrarySecondLabel> Use.
            </S.LibrarySecondTitle>
          </S.LibrarySecondTitleBox>
          <S.LibraryDescriptionBox
            initial={{ opacity: 0 }}
            style={{ x: 32 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <S.LibraryDescription>
              Explore the latest features. See why Snippets Library is the best snippet service.
            </S.LibraryDescription>
          </S.LibraryDescriptionBox>
          <S.LibrarySecondLink to={ROUTES.docs}>
            Get started <ArrowForwardIcon />
          </S.LibrarySecondLink>
        </S.LibrarySecondMainBox>
      </S.LibrarySecondInner>
    </S.Library>
  )
}

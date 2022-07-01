import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

const firstBoxAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}

const secondBoxAnimation = {
  hidden: {
    x: 50,
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
        <S.LibraryMainBox
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          variants={firstBoxAnimation}
        >
          <S.LibraryTitleBox>
            <S.LibraryTitle>
              Snippets <S.LibraryLabel>Library</S.LibraryLabel>
            </S.LibraryTitle>
          </S.LibraryTitleBox>
          <S.LibraryDescriptionBox>
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
          variants={secondBoxAnimation}
        >
          <S.LibrarySecondTitleBox>
            <S.LibrarySecondTitle>
              Create. <S.LibrarySecondLabel>Explore.</S.LibrarySecondLabel> Use.
            </S.LibrarySecondTitle>
          </S.LibrarySecondTitleBox>
          <S.LibraryDescriptionBox>
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

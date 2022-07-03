import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { motion } from 'framer-motion'

import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1 },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
}

const frameVariants = {
  hover: { scale: 0.99 },
}

const imageVariants = {
  hover: { scale: 0.99 },
}

export const FirstItem = () => {
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
      <S.TryForFreeLink to={ROUTES.auth}>
        <S.Text>Try for free</S.Text>
        <KeyboardArrowRightIcon sx={{ width: '4.6rem', height: '4.6rem' }} />
      </S.TryForFreeLink>
      <S.ContentImages variants={thumbnailVariants}>
        <motion.div whileHover='hover' variants={frameVariants}>
          <motion.img
            src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/5b5a3938562fa764113169a6/1532639559620/DSCF3338.jpg?format=960w`}
            alt='Test Photo'
            variants={imageVariants}
          />
        </motion.div>
      </S.ContentImages>
    </S.Content>
  )
}

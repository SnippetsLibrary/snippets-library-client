import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { motion } from 'framer-motion'

import * as S from './styles'
import { frameVariants, imageVariants, thumbnailVariants } from './variants'

import { ROUTES } from 'src/utils/constants/routes'

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
            src={`https://w.wallhaven.cc/full/kx/wallhaven-kx98xd.jpg`}
            alt='Test Photo'
            variants={imageVariants}
            width={'100%'}
          />
        </motion.div>
      </S.ContentImages>
    </S.Content>
  )
}

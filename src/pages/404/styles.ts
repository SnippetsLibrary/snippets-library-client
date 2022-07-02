import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Error = styled.div`
  max-width: auto;
`

export const ErrorInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1440px;
  height: min-content;
  margin: 0 auto;
  padding: 120px 0px 150px;
`

export const ErrorTitle = styled(motion.h1)`
  width: 660px;
  height: auto;

  font-size: 80px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -3px;
`

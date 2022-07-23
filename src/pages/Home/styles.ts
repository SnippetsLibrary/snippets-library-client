import styled from 'styled-components'

import { E_InnerType } from './index'

export const PostsBox = styled.div``

interface I_InnerProps {
  type: E_InnerType
}

export const Inner = styled.div<I_InnerProps>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  max-width: 968px;
  height: 100%;
  margin: 0 auto;
  padding: ${({ type }) => (type === E_InnerType.mainType ? '48px' : '48px 48px 0')};
`

export const FilterBox = styled.div`
  position: relative;

  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translate(0, -50%);

    fill: rgba(0, 0, 0, 0.26);
  }
`

export const FilterInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 6px 42px;

  font-family: GTWalsheimPro, sans-serif;
  font-size: 16px;

  border: 0;
  border-radius: 24px;
  outline: 1px solid #8888;
`

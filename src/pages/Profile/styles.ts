import styled from 'styled-components'

export const Profile = styled.div`
  padding-bottom: 256px;

  background-color: ${({ theme }) => theme.colors.library.backgroundSecondary};
`

export const Inner = styled.div`
  padding-top: 64px;
`

export const InnerBox = styled.div`
  display: flex;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 48px;
`

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;
  max-width: 324px;
`

export const Loader = styled.div`
  height: calc(100vh - 81px);

  background-color: ${({ theme }) => theme.colors.library.backgroundSecondary};
`

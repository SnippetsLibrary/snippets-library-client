import * as S from './styles'

export const Error = () => {
  return (
    <S.Error>
      <S.ErrorInner>
        <S.ErrorTitle
          initial={{ opacity: 0 }}
          style={{ y: -72 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Page Not Found
        </S.ErrorTitle>
      </S.ErrorInner>
    </S.Error>
  )
}

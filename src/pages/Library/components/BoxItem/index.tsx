import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { boxItems, E_BoxItemsTypes } from './data'
import * as S from './styles'
import { animation, reversedAnimation } from './variants'

export const BoxItems = () => {
  return (
    <>
      {boxItems.map((item, index) => {
        return (
          <S.LibraryInner key={index} $type={item.type === E_BoxItemsTypes.odd}>
            <S.LibraryMainBox
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.2, once: true }}
              variants={item.type === E_BoxItemsTypes.odd ? animation : reversedAnimation}
              $type={item.type === E_BoxItemsTypes.odd}
            >
              <S.LibraryTitleBox $type={item.type === E_BoxItemsTypes.odd}>
                <S.LibraryTitle>
                  {item.title}
                  <S.LibraryLabel $type={item.type === E_BoxItemsTypes.odd}>
                    {item.label}
                  </S.LibraryLabel>
                  {item.lastTitle}
                </S.LibraryTitle>
              </S.LibraryTitleBox>
              <S.LibraryDescriptionBox>
                <S.LibraryDescription>{item.description}</S.LibraryDescription>
              </S.LibraryDescriptionBox>
              <S.LibraryLink to={item.leadsTo}>
                {item.linkLabel} <ArrowForwardIcon />
              </S.LibraryLink>
            </S.LibraryMainBox>
          </S.LibraryInner>
        )
      })}
    </>
  )
}

import { ToastContainer } from 'react-toastify'

import { Routing } from './routing'
import * as S from './styles/app'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <S.App>
      <Routing />
      <GlobalStyles />
      <ToastContainer hideProgressBar autoClose={1500} />
    </S.App>
  )
}

export default App

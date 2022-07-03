import { useDispatch } from 'react-redux'

import type { RootDispatch } from 'src/store'

export const useStoreDispatch = () => useDispatch<RootDispatch>()

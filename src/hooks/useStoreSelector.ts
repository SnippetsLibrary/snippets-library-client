import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { RootState } from 'src/store'

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

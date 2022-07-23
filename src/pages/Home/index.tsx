import SearchIcon from '@mui/icons-material/Search'
import { LinearProgress } from '@mui/material'
import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { Posts } from './components/Posts'
import * as S from './styles'

import { postAPI } from 'src/services/post'
import { I_Post } from 'src/typings/interfaces/post'

export enum E_InnerType {
  mainType = 'main',
  filterType = 'filter',
}

export const Home = () => {
  const [posts, setPosts] = useState<I_Post[]>()
  const [filterValue, setFilterValue] = useState<string>('')
  const [debouncedFilterValue] = useDebounce(filterValue, 500)

  const [
    getPosts,
    { data: getPostsData, isSuccess: getPostsDataSuccess, isLoading: getPostsDataLoading },
  ] = postAPI.useLazyGetPostsQuery()

  const handleSetFilterValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  useEffect(() => {
    getPosts(debouncedFilterValue)
  }, [getPostsData, debouncedFilterValue])

  useLayoutEffect(() => {
    if (getPostsData && getPostsData.payload && getPostsDataSuccess)
      setPosts(getPostsData.payload.docs)
  }, [getPostsData, getPostsDataSuccess])

  if (getPostsDataLoading)
    return (
      <S.PostsBox>
        <LinearProgress />
      </S.PostsBox>
    )

  if (posts && getPostsDataSuccess)
    return (
      <S.PostsBox>
        <div>
          <S.Inner type={E_InnerType.filterType}>
            <S.FilterBox>
              <SearchIcon />
              <S.FilterInput
                type='text'
                placeholder='Posts Search'
                value={filterValue}
                onChange={handleSetFilterValue}
              />
            </S.FilterBox>
          </S.Inner>
          <S.Inner type={E_InnerType.mainType}>
            <Posts posts={posts} />
          </S.Inner>
        </div>
      </S.PostsBox>
    )

  return (
    <S.PostsBox>
      <LinearProgress />
    </S.PostsBox>
  )
}

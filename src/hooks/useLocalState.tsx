import context from '@/state/context'
import { useCallback, useContext, useState, type Dispatch, type SetStateAction } from 'react'

export type UseLocalState = <LocalData>(initialLocalState: LocalData) => {
  localState: LocalData
  setLocalState: Dispatch<SetStateAction<LocalData>>
  isCurrentEdited: boolean
  setIsCurrentEdited: (isCurrentEdited: boolean) => void
}

const useLocalState: UseLocalState = (initialLocalState) => {
  const { state, dispatch } = useContext(context)
  const [localState, setLocalState] = useState(initialLocalState)

  const setIsCurrentEdited = useCallback((isCurrentEdited: boolean) => {
    dispatch({
      type: 'SET_IS_CURRENT_EDITED',
      payload: isCurrentEdited
    })
  }, [])

  return {
    localState,
    setLocalState,
    isCurrentEdited: state.isCurrentEdited,
    setIsCurrentEdited
  }
}

export default useLocalState

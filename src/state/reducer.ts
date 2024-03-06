import { type State } from '@/state/context'
import { type Reducer as ReactReducer } from 'react'

export type Action =
| { type: 'SET_CONFIG', payload: State['config'] }
| { type: 'SET_IS_CURRENT_EDITED', payload: State['isCurrentEdited'] }
| { type: 'SET_DIALOG', payload: State['dialog'] }

const reducer: ReactReducer<State, Action> = (state, action) => {
  switch (action.type) {
  case 'SET_CONFIG':
    return {
      ...state,
      config: action.payload
    }
  case 'SET_IS_CURRENT_EDITED':
    return {
      ...state,
      isCurrentEdited: action.payload
    }
  case 'SET_DIALOG':
    return {
      ...state,
      dialog: action.payload
    }
  default:
    return state
  }
}

export default reducer

import { type ActionsForNautilus } from '@/schemas/ActionsForNautilus'
import { type Action } from '@/state/reducer'
import { createContext, type ReactNode } from 'react'

export interface DialogData {
  Title: ReactNode
  Content: ReactNode
  onClose: () => void
  onCancel: () => void
  onConfirm: () => void
}

export interface State {
  config?: ActionsForNautilus
  isCurrentEdited: boolean
  dialog?: DialogData
}

export type Dispatch = (action: Action) => void

const context = createContext<{ state: State, dispatch: Dispatch }>({ dispatch: () => {}, state: { isCurrentEdited: false } })

export default context

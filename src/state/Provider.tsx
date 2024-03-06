import context from '@/state/context'
import reducer from '@/state/reducer'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useReducer, type FC, type ReactNode } from 'react'

interface ProviderProps {
  children?: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { config: undefined, isCurrentEdited: false })

  return (
    <context.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
      <Dialog
        open={state.dialog !== undefined}
        onClose={() => {
          if (state.dialog?.onClose !== undefined) {
            state.dialog?.onClose()
          }
        }}
        keepMounted={false}
      >
        <DialogTitle>{state.dialog?.Title}</DialogTitle>
        <DialogContent>{state.dialog?.Content}</DialogContent>
        <DialogActions>
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={() => {
              if (state.dialog?.onCancel !== undefined) {
                state.dialog?.onCancel()
              }
            }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() => {
              if (state.dialog?.onConfirm !== undefined) {
                state.dialog?.onConfirm()
              }
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </context.Provider>
  )
}

export default Provider

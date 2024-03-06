import { type ActionsForNautilus } from '@/schemas/ActionsForNautilus'
import context from '@/state/context'
import { Clear, FileDownload } from '@mui/icons-material'
import { Button, ButtonGroup } from '@mui/material'
import { useCallback, useContext, type FC } from 'react'

const ConfigButtonGroup: FC = () => {
  const { state, dispatch } = useContext(context)
  const handleSave = useCallback((config: ActionsForNautilus) => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'config.json'
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  return (
    <ButtonGroup>
      <Button
        color="warning"
        onClick={() => {
          dispatch({
            type: 'SET_DIALOG',
            payload: {
              Title: 'Clear config',
              Content: 'Are you sure you want to clear the config?',
              onClose: () => {
                dispatch({
                  type: 'SET_DIALOG',
                  payload: undefined
                })
              },
              onCancel: () => {
                dispatch({
                  type: 'SET_DIALOG',
                  payload: undefined
                })
              },
              onConfirm: () => {
                dispatch({
                  type: 'SET_CONFIG',
                  payload: undefined
                })
                dispatch({
                  type: 'SET_IS_CURRENT_EDITED',
                  payload: false
                })
                dispatch({
                  type: 'SET_DIALOG',
                  payload: undefined
                })
              }
            }
          })
        }}
      >
        <Clear fontSize="inherit" />&nbsp;Clear
      </Button>
      <Button
        color="success"
        onClick={() => {
          if (state.isCurrentEdited && state.config !== undefined) {
            dispatch({
              type: 'SET_DIALOG',
              payload: {
                Title: 'Unsaved changes',
                Content: 'You have unsaved changes. Want to export anyway?',
                onClose: () => {
                  dispatch({
                    type: 'SET_DIALOG',
                    payload: undefined
                  })
                },
                onCancel: () => {
                  dispatch({
                    type: 'SET_DIALOG',
                    payload: undefined
                  })
                },
                onConfirm: () => {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  handleSave(state.config!)
                  dispatch({
                    type: 'SET_DIALOG',
                    payload: undefined
                  })
                }
              }
            })
          } else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handleSave(state.config!)
          }
        }}
      >
        <FileDownload fontSize="inherit" />&nbsp;Export
      </Button>
    </ButtonGroup>
  )
}

export default ConfigButtonGroup

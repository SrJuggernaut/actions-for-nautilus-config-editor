import { defaultCommand, defaultMenu, type Action } from '@/schemas/ActionsForNautilus'
import context from '@/state/context'
import { ContentCopy, Delete, KeyboardArrowDown, KeyboardArrowUp, Menu as MenuIcon, Terminal } from '@mui/icons-material'
import { Button, ButtonGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Tooltip } from '@mui/material'
import { useContext, type FC } from 'react'

interface ActionListProps {
  value: Action[]
  onChange: (actions: Action[]) => void
  onEditAction: (index: number) => void
}

const ActionsList: FC<ActionListProps> = ({ onChange, onEditAction, value }) => {
  const { dispatch, state } = useContext(context)
  return (
    <List
      aria-labelledby="actions"
      subheader={<ListSubheader>Actions</ListSubheader>}
    >
      {value.map((action, index) => (
        <ListItem
          key={`action-${index}`}
          secondaryAction={(
            <ButtonGroup
              variant="outlined"
            >
              <Tooltip title="Move up">
                <Button
                  disabled={index === 0}
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index - 1, 0, newActions.splice(index, 1)[0])
                    onChange(newActions)
                  }}
                >
                  <KeyboardArrowUp fontSize='inherit' />
                </Button>
              </Tooltip>
              <Tooltip title="Move down">
                <Button
                  disabled={index === value.length - 1}
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index + 1, 0, newActions.splice(index, 1)[0])
                    onChange(newActions)
                  }}
                >
                  <KeyboardArrowDown fontSize='inherit' />
                </Button>
              </Tooltip>
              <Tooltip title="Copy">
                <Button
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index + 1, 0, { ...action, label: action.label + ' (copy)' })
                    onChange(newActions)
                  }}
                >
                  <ContentCopy fontSize='inherit' />
                </Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index, 1)
                    onChange(newActions)
                  }}
                >
                  <Delete fontSize='inherit' />
                </Button>
              </Tooltip>
            </ButtonGroup>
          )}
          disablePadding
        >
          <Tooltip title={`Edit ${action.label}`}>
            <ListItemButton
              onClick={(event) => {
                event.stopPropagation()
                if (state.isCurrentEdited) {
                  dispatch({
                    type: 'SET_DIALOG',
                    payload: {
                      Title: 'Unsaved changes',
                      Content: 'You have unsaved changes. Are you sure you want to leave?',
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
                          type: 'SET_DIALOG',
                          payload: undefined
                        })
                        onEditAction(index)
                      }
                    }
                  })
                } else {
                  onEditAction(index)
                }
              }}
            >
              <ListItemIcon>
                {action.type === 'command' ? <Terminal fontSize='inherit' /> : <MenuIcon fontSize='inherit' /> }
              </ListItemIcon>
              <ListItemText primary={action.label} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
      <ListSubheader>Add Action</ListSubheader>
      <ListItem
        disablePadding
      >
        <ListItemButton
          onClick={(event) => {
            event.stopPropagation()
            onChange([...value, {
              ...defaultCommand
            }])
          }}

        >
          <ListItemIcon>
            <Terminal fontSize='inherit' />
          </ListItemIcon>
          <ListItemText primary="Add Command" />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
      >
        <ListItemButton
          onClick={(event) => {
            event.stopPropagation()
            onChange([...value, {
              ...defaultMenu
            }])
          }}
        >
          <ListItemIcon>
            <MenuIcon fontSize='inherit' />
          </ListItemIcon>
          <ListItemText primary="Add Menu" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default ActionsList

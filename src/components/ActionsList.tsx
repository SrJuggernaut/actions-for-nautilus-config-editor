import { defaultCommand, defaultMenu, type Action } from '@/schemas/ActionsForNautilus'
import context from '@/state/context'
import { faBars, faChevronDown, faChevronUp, faClone, faTerminal, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                  LinkComponent={ index === 0 ? 'span' : 'button' }
                  href={index === 0 ? '#' : undefined}
                  disabled={index === 0}
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index - 1, 0, newActions.splice(index, 1)[0])
                    onChange(newActions)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronUp} fixedWidth />
                </Button>
              </Tooltip>
              <Tooltip title="Move down">
                <Button
                  LinkComponent={ index === value.length - 1 ? 'span' : 'button' }
                  href={index === value.length - 1 ? '#' : undefined}
                  disabled={index === value.length - 1}
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index + 1, 0, newActions.splice(index, 1)[0])
                    onChange(newActions)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronDown} fixedWidth />
                </Button>
              </Tooltip>
              <Tooltip title="Duplicate">
                <Button
                  onClick={(event) => {
                    event.stopPropagation()
                    const newActions = [...value]
                    newActions.splice(index + 1, 0, { ...action, label: action.label + ' (duplicate)' })
                    onChange(newActions)
                  }}
                >
                  <FontAwesomeIcon icon={faClone} fixedWidth />
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
                  <FontAwesomeIcon icon={faTrash} fixedWidth />
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
                {action.type === 'command' ? <FontAwesomeIcon icon={faTerminal} fixedWidth /> : <FontAwesomeIcon icon={faBars} fixedWidth /> }
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
            <FontAwesomeIcon icon={faTerminal} fixedWidth />
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
            <FontAwesomeIcon icon={faBars} fixedWidth />
          </ListItemIcon>
          <ListItemText primary="Add Menu" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default ActionsList

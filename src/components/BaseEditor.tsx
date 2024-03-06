import ActionsList from '@/components/ActionsList'
import Breadcrumbs from '@/components/Breadcrumbs'
import Alert, { type AlertProps } from '@/components/ui/Alert'
import useLocalState from '@/hooks/useLocalState'
import { actionsForNautilusSchema, type ActionsForNautilus } from '@/schemas/ActionsForNautilus'
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { Suspense, lazy, useCallback, useEffect, useState, type FC } from 'react'

const ActionEditor = lazy(async () => await import('@/components/ActionEditor'))

export interface BaseEditorProps {
  value: ActionsForNautilus
  onChange: (value: ActionsForNautilus) => void
}

const BaseEditor: FC<BaseEditorProps> = ({ value, onChange }) => {
  const [error, setError] = useState<Omit<AlertProps, 'onClose' | 'open'> | undefined>(undefined)
  const { isCurrentEdited, localState, setIsCurrentEdited, setLocalState } = useLocalState(value)
  const [editingAction, setEditingAction] = useState<number | undefined>(undefined)

  const handleSave = useCallback((currentLocalState: ActionsForNautilus) => {
    const result = actionsForNautilusSchema.safeParse(currentLocalState)
    if (!result.success) {
      setError({
        message: `${result.error.issues[0].message} at ${result.error.issues[0].path.length > 0 ? result.error.issues[0].path.join('.') : 'root'}`,
        title: result.error.issues[0].code,
        severity: 'error'
      })
    } else {
      setError(undefined)
      onChange(currentLocalState)
    }
  }, [])

  const handleReset = (): void => {
    setLocalState(value)
  }

  useEffect(() => {
    if (editingAction !== undefined) return
    const valueAsString = JSON.stringify(value)
    const localStateAsString = JSON.stringify(localState)
    if (valueAsString !== localStateAsString) {
      setIsCurrentEdited(true)
    } else {
      setIsCurrentEdited(false)
    }
  }, [value, localState, editingAction])

  useEffect(() => {
    if (editingAction !== undefined) {
      setLocalState(value)
    }
  }, [editingAction])

  if (editingAction !== undefined) {
    return <Suspense>
      <ActionEditor
        value={value.actions[editingAction]}
        breadcrumbs={[{ label: 'Root', onClick: () => { setEditingAction(undefined) } }]}
        onChange={(modifiedAction) => {
          const newActions = [...value.actions.slice(0, editingAction), modifiedAction, ...value.actions.slice(editingAction + 1)]
          onChange({
            ...value,
            actions: newActions
          })
        }}
      />
    </Suspense>
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Root', onClick: () => { } }]} />
      <Alert
        open={error !== undefined}
        message={error !== undefined ? error?.message : ''}
        title={error !== undefined ? error?.title : ''}
        severity={error !== undefined ? error?.severity : 'error'}
        onClose={() => { setError(undefined) }}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2
        }}
      >
        <ActionsList
          value={localState.actions}
          onChange={(actions) => {
            setLocalState({
              ...localState,
              actions
            })
          }}
          onEditAction={(index) => {
            setEditingAction(index)
          }}
        />
        <Box>
          <FormControl>
            <FormLabel id="sort">Sort</FormLabel>
            <RadioGroup
              aria-labelledby="sort"
              name="sort"
              defaultValue={'auto'}
              value={localState.sort}
              onChange={(event) => {
                setLocalState({
                  ...localState,
                  sort: event.target.value as ActionsForNautilus['sort']
                })
              }}
              row
            >
              <FormControlLabel value="auto" control={<Radio />} label="Auto" />
              <FormControlLabel value="manual" control={<Radio />} label="Manual" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              onChange={(_, checked) => {
                setLocalState({
                  ...localState,
                  debug: checked
                })
              }}
              value={localState.debug}
              control={<Switch />}
              label="Debug"
            />
          </FormGroup>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          marginTop: 2
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          onClick={handleReset}
          disabled={!isCurrentEdited}
          fullWidth
        >
          Reset
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            handleSave(localState)
          }}
          disabled={!isCurrentEdited}
          fullWidth
        >
          Save
        </Button>
      </Box>
    </>
  )
}

export default BaseEditor

import ActionsList from '@/components/ActionsList'
import Alert, { type AlertProps } from '@/components/ui/Alert'
import useLocalState from '@/hooks/useLocalState'
import { menuSchema, type Menu } from '@/schemas/ActionsForNautilus'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { useCallback, useEffect, useState, type Dispatch, type FC, type SetStateAction } from 'react'

interface MenuEditorProps {
  value: Menu
  onChange: (value: Menu) => void
  setEditingAction: Dispatch<SetStateAction<number | undefined>>
}

const MenuEditor: FC<MenuEditorProps> = ({ onChange, value, setEditingAction }) => {
  const [error, setError] = useState<Omit<AlertProps, 'onClose' | 'open'> | undefined>(undefined)
  const { isCurrentEdited, localState, setIsCurrentEdited, setLocalState } = useLocalState(value)

  useEffect(() => {
    const valueAsString = JSON.stringify(value)
    const localStateAsString = JSON.stringify(localState)
    if (valueAsString !== localStateAsString) {
      setIsCurrentEdited(true)
    } else {
      setIsCurrentEdited(false)
    }
  }, [value, localState])

  const handleSave = useCallback((currentLocalState: Menu) => {
    const result = menuSchema.safeParse(currentLocalState)
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

  return (
    <>
      <Alert
        open={error !== undefined}
        message={error !== undefined ? error?.message : ''}
        title={error !== undefined ? error?.title : ''}
        severity={error !== undefined ? error?.severity : 'error'}
        onClose={() => { setError(undefined) }}
      />
      <TextField
        id="label"
        label="Label"
        value={localState.label}
        onChange={(event) => {
          setLocalState({
            ...localState,
            label: event.target.value
          })
        }}
        fullWidth
        margin="normal"
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
              value={localState.sort}
              onChange={(_, value) => {
                setLocalState({
                  ...localState,
                  sort: value as Menu['sort']
                })
              }}
              row
            >
              <FormControlLabel value="auto" control={<Radio />} label="Auto" />
              <FormControlLabel value="manual" control={<Radio />} label="Manual" />
            </RadioGroup>
          </FormControl>
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

export default MenuEditor

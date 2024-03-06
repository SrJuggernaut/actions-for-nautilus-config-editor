import FiletypesEditor from '@/components/ActionEditor/commandEditor/FiletypesEditor'
import MimeTypesEditor from '@/components/ActionEditor/commandEditor/MimeTypesEditor'
import PathPatternsEditor from '@/components/ActionEditor/commandEditor/PathPatternsEditor'
import Alert, { type AlertProps } from '@/components/ui/Alert'
import NumberInput from '@/components/ui/NumberInput'
import useLocalState from '@/hooks/useLocalState'
import { commandSchema, type Command } from '@/schemas/ActionsForNautilus'
import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import { useCallback, useEffect, useState, type FC } from 'react'

interface CommandEditorProps {
  value: Command
  onChange: (value: Command) => void
}

const CommandEditor: FC<CommandEditorProps> = ({ value, onChange }) => {
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

  const handleSave = useCallback((currentLocalState: Command) => {
    const result = commandSchema.safeParse(currentLocalState)
    if (!result.success) {
      setError({
        message: `${result.error.issues[0].message} at ${result.error.issues[0].path.length > 0 ? result.error.issues[0].path.join('.') : 'root'}`,
        title: result.error.issues[0].code,
        severity: 'error'
      })
    } else {
      setError(undefined)
      onChange(result.data)
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
      <TextField
        id="command_line"
        label="Command Line"
        value={localState.command_line}
        onChange={(event) => {
          setLocalState({
            ...localState,
            command_line: event.target.value
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
        <TextField
          id="cwd"
          label="Current working directory"
          value={localState.cwd ?? ''}
          onChange={(event) => {
            setLocalState({
              ...localState,
              cwd: event.target.value === '' ? undefined : event.target.value
            })
          }}
          fullWidth
          margin="normal"
        />
        <FormGroup
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <FormControlLabel
            onChange={(_, checked) => {
              setLocalState({
                ...localState,
                use_shell: checked
              })
            }}
            value={localState.use_shell}
            control={<Switch />}
            label="Use Shell"
          />
        </FormGroup>
        <FormControl
          fullWidth
        >
          <FormLabel htmlFor="min_items">Min Items</FormLabel>
          <NumberInput
            id="min_items"
            value={localState.min_items}
            onChange={(_, value) => {
              setLocalState({
                ...localState,
                min_items: value ?? 0
              })
            }}
          />
        </FormControl>
        <FormControl
          fullWidth
        >
          <FormLabel htmlFor="max_items">Max Items</FormLabel>
          <NumberInput
            id="max_items"
            value={localState.max_items}
            onChange={(_, value) => {
              setLocalState({
                ...localState,
                max_items: value ?? 0
              })
            }}
          />
        </FormControl>
        <FormControl
          margin="normal"
          fullWidth
        >
          <InputLabel htmlFor="permissions-label">Access permissions</InputLabel>
          <Select
            labelId="permissions-label"
            id="permissions"
            value={localState.permissions ?? 'undefined' }
            label="Access permissions"
            onChange={(event) => {
              setLocalState({
                ...localState,
                permissions: event.target.value === 'undefined' ? undefined : event.target.value as Command['permissions']
              })
            }}
          >
            <MenuItem value="undefined">Undefined (Default)</MenuItem>
            <MenuItem value="read">Read</MenuItem>
            <MenuItem value="write">Write</MenuItem>
            <MenuItem value="read-write">Read and Write</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize='inherit' />}
        >
          {`Mime types (${localState.mimetypes === undefined || localState.mimetypes.length === 0 ? 'Disabled' : localState.mimetypes.length})`}
        </AccordionSummary>
        <AccordionDetails>
          <MimeTypesEditor
            value={localState.mimetypes ?? []}
            onChange={(mimetypes) => {
              if (mimetypes.length === 0) {
                setLocalState({
                  ...localState,
                  mimetypes: undefined
                })
              } else {
                setLocalState({
                  ...localState,
                  mimetypes
                })
              }
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize='inherit' />}
        >
          {`File types (${localState.filetypes === undefined || localState.filetypes.length === 0 ? 'Disabled' : localState.filetypes.length})`}
        </AccordionSummary>
        <AccordionDetails>
          <FiletypesEditor
            value={localState.filetypes ?? []}
            onChange={(filetypes) => {
              if (filetypes.length === 0) {
                setLocalState({
                  ...localState,
                  filetypes: undefined
                })
              } else {
                setLocalState({
                  ...localState,
                  filetypes
                })
              }
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize='inherit' />}
        >
          {`Path patterns (${localState.path_patterns === undefined || localState.path_patterns.length === 0 ? 'Disabled' : localState.path_patterns.length})`}
        </AccordionSummary>
        <AccordionDetails>
          <PathPatternsEditor
            value={localState.path_patterns ?? []}
            onChange={(pathPatterns) => {
              if (pathPatterns.length === 0) {
                setLocalState({
                  ...localState,
                  path_patterns: undefined
                })
              } else {
                setLocalState({
                  ...localState,
                  path_patterns: pathPatterns
                })
              }
            }}
          />
        </AccordionDetails>
      </Accordion>
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

export default CommandEditor

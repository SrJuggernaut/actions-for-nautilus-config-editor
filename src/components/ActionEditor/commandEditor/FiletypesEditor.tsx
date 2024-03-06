import { type Command } from '@/schemas/ActionsForNautilus'
import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type FC } from 'react'

export interface FiletypesEditorProps {
  value: Exclude<Command['filetypes'], undefined>
  onChange: (value: Exclude<Command['filetypes'], undefined>) => void
}

const FiletypesEditor: FC<FiletypesEditorProps> = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
        gap: 2
      }}
    >
      {value.map((filetype, index) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
          key={`filetype-${index}`}
        >
          <FormControl
            fullWidth
          >
            <InputLabel id={`filetype-${index}-label`}>File type</InputLabel>
            <Select
              labelId={`filetype-${index}-label`}
              id={`filetype-${index}-select`}
              value={filetype}
              label="File type"
              onChange={(event) => {
                const newFiletypes = [...value]
                newFiletypes[index] = event.target.value as Exclude<Command['filetypes'], undefined>[0]
                onChange(newFiletypes)
              }}
            >
              {/* "unknown" | "file" | "directory" | "symbolic-link" | "special" | "shortcut" | "mountable" | "standard" | "!unknown" | "!file" | "!directory" | "!symbolic-link" | "!special" | "!shortcut" | "!mountable" | "!standard" */}
              <MenuItem value='unknown'>Unknown</MenuItem>
              <MenuItem value='file'>File</MenuItem>
              <MenuItem value='directory'>Directory</MenuItem>
              <MenuItem value='symbolic-link'>Symbolic Link</MenuItem>
              <MenuItem value='special'>Special</MenuItem>
              <MenuItem value='shortcut'>Shortcut</MenuItem>
              <MenuItem value='mountable'>Mountable</MenuItem>
              <MenuItem value='standard'>Standard</MenuItem>
              <MenuItem value='!unknown'>Not Unknown</MenuItem>
              <MenuItem value='!file'>Not File</MenuItem>
              <MenuItem value='!directory'>Not Directory</MenuItem>
              <MenuItem value='!symbolic-link'>Not Symbolic Link</MenuItem>
              <MenuItem value='!special'>Not Special</MenuItem>
              <MenuItem value='!shortcut'>Not Shortcut</MenuItem>
              <MenuItem value='!mountable'>Not Mountable</MenuItem>
              <MenuItem value='!standard'>Not Standard</MenuItem>
            </Select>
          </FormControl>
          <ButtonGroup
            variant="outlined"
          >
            <Button
              disabled={index === 0}
              onClick={(event) => {
                event.stopPropagation()
                const newMimetypes = [...value]
                newMimetypes.splice(index - 1, 0, newMimetypes.splice(index, 1)[0])
                onChange(newMimetypes)
              }}
            >
              <KeyboardArrowUp fontSize='inherit' />
            </Button>
            <Button
              disabled={value === undefined || index === value.length - 1}
              onClick={(event) => {
                event.stopPropagation()
                const newMimetypes = [...value]
                newMimetypes.splice(index + 1, 0, newMimetypes.splice(index, 1)[0])
                onChange(newMimetypes)
              }}
            >
              <KeyboardArrowDown fontSize='inherit' />
            </Button>
            <Button
              onClick={(event) => {
                event.stopPropagation()
                const newMimetypes = [...value]
                newMimetypes.splice(index, 1)
                onChange(newMimetypes)
              }}
            >
              <Delete fontSize='inherit' />
            </Button>
          </ButtonGroup>
        </Box>
      ))}
      <Button
        variant="outlined"
        onClick={() => {
          onChange([...value, 'unknown'])
        }}
      >
        Add filetype
      </Button>
    </Box>
  )
}

export default FiletypesEditor

import { type Command } from '@/schemas/ActionsForNautilus'
import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, ButtonGroup, TextField } from '@mui/material'
import { type FC } from 'react'

export interface PathPatternsEditorProps {
  value: Exclude<Command['path_patterns'], undefined>
  onChange: (value: Exclude<Command['path_patterns'], undefined>) => void
}

const PathPatternsEditor: FC<PathPatternsEditorProps> = ({ onChange, value }) => {
  return (
    <Box
    >
      {value.map((pattern, index) => (
        <Box
          key={`filetype-${index}`}
        >
          <TextField
            id="pattern"
            label="Pattern"
            value={pattern}
            onChange={(event) => {
              const newPatterns = [...value]
              newPatterns[index] = event.target.value
              onChange(newPatterns)
            }}
            InputProps={{
              endAdornment: (
                <ButtonGroup
                  variant="outlined"
                >
                  <Button
                    disabled={index === 0}
                    onClick={(event) => {
                      event.stopPropagation()
                      const newPatterns = [...value]
                      newPatterns.splice(index + 1, 0, newPatterns.splice(index, 1)[0])
                      onChange(newPatterns)
                    }}
                  >
                    <KeyboardArrowDown fontSize="inherit" />
                  </Button>
                  <Button
                    disabled={index === value.length - 1}
                    onClick={(event) => {
                      event.stopPropagation()
                      const newPatterns = [...value]
                      newPatterns.splice(index - 1, 0, newPatterns.splice(index, 1)[0])
                      onChange(newPatterns)
                    }}
                  >
                    <KeyboardArrowUp fontSize="inherit" />
                  </Button>
                  <Button
                    onClick={(event) => {
                      event.stopPropagation()
                      const newPatterns = [...value]
                      newPatterns.splice(index, 1)
                      onChange(newPatterns)
                    }}
                  >
                    <Delete fontSize="inherit"/>
                  </Button>
                </ButtonGroup>
              )
            }}
            fullWidth
            margin="normal"
          />
        </Box>
      ))}
      <Button
        variant="outlined"
        onClick={() => {
          onChange([...value, ''])
        }}
      >
        Add filetype
      </Button>
    </Box>
  )
}

export default PathPatternsEditor

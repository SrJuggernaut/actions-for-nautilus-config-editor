import { faChevronDown, faChevronUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, ButtonGroup, TextField } from '@mui/material'
import { type FC } from 'react'

export interface MimeTypeEditorProps {
  value: string[]
  onChange: (value: string[]) => void
}

const MimeTypeEditor: FC<MimeTypeEditorProps> = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
        gap: 2
      }}
    >
      {value?.map((mimetype, index) => (
        <TextField
          key={`mimetype-${index}`}
          id="mimetype"
          label="Mimetype"
          value={mimetype}
          InputProps={{
            endAdornment: (
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
                  <FontAwesomeIcon icon={faChevronUp} fixedWidth />
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
                  <FontAwesomeIcon icon={faChevronDown} fixedWidth />
                </Button>
                <Button
                  onClick={(event) => {
                    event.stopPropagation()
                    const newMimetypes = [...value]
                    newMimetypes.splice(index, 1)
                    onChange(newMimetypes)
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} fixedWidth />
                </Button>
              </ButtonGroup>
            )
          }}
          onChange={(event) => {
            const newMimetypes = [...value]
            newMimetypes[index] = event.target.value
            onChange(newMimetypes)
          }}
          fullWidth
          margin="normal"
        />
      ))}
      <Button
        variant="outlined"
        onClick={() => {
          onChange([...value, ''])
        }}
      >
        Add mimetype
      </Button>
    </Box>
  )
}

export default MimeTypeEditor

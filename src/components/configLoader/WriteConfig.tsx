import { Box, Button, TextField, Typography } from '@mui/material'
import { useState, type FC } from 'react'

interface WriteConfigProps {
  processImported: (acceptedFiles: string) => void
}

const WriteConfig: FC<WriteConfigProps> = ({ processImported }) => {
  const [localConfig, setLocalConfig] = useState('')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 2,
        padding: 2
      }}
    >
      <Typography variant="subtitle1" align="center">Write Config</Typography>
      <Typography variant="body1">
        Write or paste the content of your <code>config.json</code> file here.
      </Typography>
      <TextField
        id="config"
        label="Config"
        value={localConfig}
        onChange={(event) => { (setLocalConfig(event.target.value)) }}
        multiline
        fullWidth
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flexGrow: 1,
          '& .MuiInputBase-root': {
            height: '100%'
          }
        }}
      />
      <Button
        onClick={() => {
          processImported(localConfig)
        }}
        variant="contained"
        fullWidth
      >
        Save
      </Button>
    </Box>
  )
}

export default WriteConfig

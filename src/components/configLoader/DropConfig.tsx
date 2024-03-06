import { Box, Typography } from '@mui/material'
import { useCallback, type FC } from 'react'
import { useDropzone } from 'react-dropzone'

interface DropConfigProps {
  processImported: (acceptedFiles: string) => void
}

const DropConfig: FC<DropConfigProps> = ({ processImported }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles[0].text()
      .then(text => {
        processImported(text)
      })
      .catch(err => { console.error(err) })
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, isFileDialogActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json']
    },
    maxFiles: 1
  })

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        border: '1px dashed',
        borderColor: isDragAccept ? 'success.main' : isDragReject ? 'error.main' : isDragActive || isFileDialogActive ? 'primary.main' : 'divider'
      }}
    >
      <input {...getInputProps()} />
      {isDragActive
        ? (
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Drop your <code>config.json</code> here...</Typography>
        )
        : (
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
            Drag & drop your <code>config.json</code> file here, or click to select
          </Typography>
        )
      }
    </Box>
  )
}

export default DropConfig

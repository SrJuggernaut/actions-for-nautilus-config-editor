import CloseIcon from '@mui/icons-material/Close'
import { AlertTitle, Collapse, IconButton, Alert as MuiAlert } from '@mui/material'
import { type FC } from 'react'

export interface AlertProps {
  title: string
  message: string
  severity: 'error' | 'warning' | 'info' | 'success'
  open: boolean
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, severity, title, open, onClose }) => {
  return (
    <Collapse
      in={open}
      sx={{
        paddingBlock: 1
      }}
    >
      <MuiAlert
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        )}
        severity={severity}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </MuiAlert>
    </Collapse>
  )
}

export default Alert

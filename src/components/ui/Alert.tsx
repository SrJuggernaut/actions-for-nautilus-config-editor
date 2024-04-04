import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <FontAwesomeIcon icon={faTimes} fixedWidth />
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

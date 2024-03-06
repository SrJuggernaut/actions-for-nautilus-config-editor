import DropConfig from '@/components/configLoader/DropConfig'
import WriteConfig from '@/components/configLoader/WriteConfig'
import Alert, { type AlertProps } from '@/components/ui/Alert'
import { actionsForNautilusSchema } from '@/schemas/ActionsForNautilus'
import context from '@/state/context'
import { Box, Typography } from '@mui/material'
import { useCallback, useContext, useState, type FC } from 'react'

const ConfigLoader: FC = () => {
  const [error, setError] = useState<Omit<AlertProps, 'onClose' | 'open'> | undefined>(undefined)
  const { dispatch } = useContext(context)

  const processImported = useCallback((maybeConfig: string) => {
    const config = JSON.parse(maybeConfig)
    const result = actionsForNautilusSchema.safeParse(config)
    if (!result.success) {
      setError({
        message: `${result.error.issues[0].message} at ${result.error.issues[0].path.length > 0 ? result.error.issues[0].path.join('.') : 'root'}`,
        title: result.error.issues[0].code,
        severity: 'error'

      })
    } else {
      dispatch({
        type: 'SET_CONFIG',
        payload: result.data
      })
    }
  }, [])

  return (
    <>
      <Box
        sx={{
          marginBottom: 2
        }}
      >
        <Typography variant="h1" align="center" >Config Loader</Typography>
        <Typography variant="body1" align="center" >
          Import config file by:
        </Typography>
      </Box>
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
          flexGrow: 1,
          minHeight: 'calc(100% - 64px)',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr'
          }
        }}
      >
        <DropConfig
          processImported={processImported}
        />
        <WriteConfig
          processImported={processImported}
        />
      </Box>
    </>
  )
}

export default ConfigLoader

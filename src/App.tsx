import Nautilus from '@/assets/Nautilus'
import ConfigButtonGroup from '@/components/ConfigButtonGroup'
import ConfigLoader from '@/components/ConfigLoader'
import Alert, { type AlertProps } from '@/components/ui/Alert'
import { actionsForNautilusSchema, type ActionsForNautilus, type Menu } from '@/schemas/ActionsForNautilus'
import context from '@/state/context'
import { BugReport, Favorite } from '@mui/icons-material'
import { AppBar, Box, Button, Link, Tooltip, Typography } from '@mui/material'
import { Suspense, lazy, useContext, useEffect, useState, type FC } from 'react'

const Traverser = lazy(async () => await import('@/components/Traverser'))

const App: FC = () => {
  const { state, dispatch } = useContext(context)
  const [error, setError] = useState<Omit<AlertProps, 'onClose' | 'open'> | undefined>(undefined)

  useEffect(() => {
    if (state.config === undefined) return
    const result = actionsForNautilusSchema.safeParse(state.config)
    if (!result.success) {
      const path = result.error.issues[0].path.length === 0
        ? ['root']
        : result.error.issues[0].path
          .filter((pathname) => pathname !== 'actions')
          .map((pathName, index, array) => {
            if (state.config === undefined || typeof pathName === 'string') return 'root' // This should never happen
            let currentActions = state.config.actions
            const toCurrent = array.slice(0, index)
            toCurrent.forEach((currentPath) => {
              const newAction: Menu = currentActions[currentPath as number] as Menu
              currentActions = newAction.actions
            })
            return currentActions[pathName].label
          })
      setError({
        title: result.error.issues[0].code,
        message: `${result.error.issues[0].message} at ${result.error.issues[0].path.length > 0 ? path.join(' > ') : 'root'}`,
        severity: 'error'
      })
    } else {
      setError(undefined)
    }
  }, [state.config])

  return (
    <>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: 1,
          paddingInline: 2,
          gap: 2
        }}
      >
        <Nautilus width={48} />
        <Box>
          <Tooltip title="Report an issue">
            <Button
              component="a"
              href="https://github.com/SrJuggernaut/actions-for-nautilus-config-editor/issues"
              target="_blank"
              rel="noreferrer"
              sx={{ marginInline: 1 }}
            >
              <BugReport />
            </Button>
          </Tooltip>
          {state.config !== undefined && <ConfigButtonGroup />}
        </Box>
      </AppBar>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          padding: 2,
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        <Alert
          open={error !== undefined}
          message={error !== undefined ? error?.message : ''}
          title={error !== undefined ? error?.title : ''}
          severity={error !== undefined ? error?.severity : 'error'}
          onClose={() => { setError(undefined) }}
        />
        {state.config === undefined
          ? <ConfigLoader />
          : (
            <Suspense>
              <Traverser
                value={state.config}
                breadcrumbs={[]}
                type='root'
                onChange={(value: ActionsForNautilus) => {
                  dispatch({
                    type: 'SET_CONFIG',
                    payload: value
                  })
                }}
              />
            </Suspense>
          )
        }
      </Box>
      <Box
        component="footer"
        sx={{
          padding: 2
        }}
      >
        <Typography variant="body2" align="center">
          Created by <Link
            href="https://github.com/SrJuggernaut"
            target="_blank"
            rel="noreferrer"
          >
            SrJuggernaut
          </Link> with <Favorite fontSize="inherit" color='error' />. Need a web developer?, <Link
            href="https://srjuggernaut.dev/contacto"
            target="_blank"
            rel="noreferrer"
          >
            contact me
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default App

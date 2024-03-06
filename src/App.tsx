import Nautilus from '@/assets/Nautilus'
import ConfigLoader from '@/components/ConfigLoader'
import context from '@/state/context'
import { BugReport, Favorite } from '@mui/icons-material'
import { AppBar, Box, Button, Link, Tooltip, Typography } from '@mui/material'
import { Suspense, lazy, useContext, type FC } from 'react'
import ConfigButtonGroup from './components/ConfigButtonGroup'

const BaseEditor = lazy(async () => await import('@/components/BaseEditor'))
const App: FC = () => {
  const { state, dispatch } = useContext(context)
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
        {state.config === undefined
          ? <ConfigLoader />
          : <Suspense>
            <BaseEditor
              value={state.config}
              onChange={(value) => {
                dispatch({
                  type: 'SET_CONFIG',
                  payload: value
                })
              }}
            />
          </Suspense>
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

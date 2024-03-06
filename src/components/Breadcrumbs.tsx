import context from '@/state/context'
import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material'
import { useContext, type FC } from 'react'

export interface ActionBreadcrumbItem {
  label: string
  onClick: () => void
}

export interface BreadCrumbsProps {
  items: ActionBreadcrumbItem[]
}
const Breadcrumbs: FC<BreadCrumbsProps> = ({ items }) => {
  const { dispatch, state } = useContext(context)
  const lastItem = items[items.length - 1]
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
    >
      {items.slice(0, items.length - 1).map((item) => (
        <Link
          key={item.label}
          component="button"
          underline="hover"
          onClick={() => {
            if (state.isCurrentEdited) {
              dispatch({
                type: 'SET_DIALOG',
                payload: {
                  Title: 'Unsaved changes',
                  Content: 'You have unsaved changes. Are you sure you want to leave?',
                  onClose: () => {
                    dispatch({
                      type: 'SET_DIALOG',
                      payload: undefined
                    })
                  },
                  onCancel: () => {
                    dispatch({
                      type: 'SET_DIALOG',
                      payload: undefined
                    })
                  },
                  onConfirm: () => {
                    dispatch({
                      type: 'SET_DIALOG',
                      payload: undefined
                    })
                    item.onClick()
                  }
                }
              })
            } else {
              item.onClick()
            }
          }}
        >
          {item.label}
        </Link>
      ))}
      <Typography color="text.primary">{lastItem.label}</Typography>
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs

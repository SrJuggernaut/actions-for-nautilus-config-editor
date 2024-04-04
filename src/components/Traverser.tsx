import CommandEditor from '@/components/ActionEditor/CommandEditor'
import MenuEditor from '@/components/ActionEditor/MenuEditor'
import Breadcrumbs, { type ActionBreadcrumbItem } from '@/components/Breadcrumbs'
import RootEditor from '@/components/RootEditor'
import { type Action, type ActionsForNautilus, type Command, type Menu } from '@/schemas/ActionsForNautilus'
import { useState, type FC } from 'react'

type TraverserProps = {
  value: ActionsForNautilus
  type: 'root'
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: ActionsForNautilus) => void
} | {
  value: Menu
  type: 'menu'
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: Menu) => void
} | {
  value: Command
  type: 'command'
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: Command) => void
}

const Traverser: FC<TraverserProps> = ({ breadcrumbs, type, onChange, value }) => {
  const [editingAction, setEditingAction] = useState<number | undefined>(undefined)

  if (type === 'menu' && editingAction !== undefined) {
    return (
      // @ts-expect-error next-line I don't know how to fix it
      <Traverser
        value={value.actions[editingAction]}
        breadcrumbs={[...breadcrumbs, { label: value.label, onClick: () => { setEditingAction(undefined) } }]}
        type={value.actions[editingAction].type}
        onChange={(modifiedAction: Action) => {
          const newActions = [...value.actions.slice(0, editingAction), modifiedAction, ...value.actions.slice(editingAction + 1)]
          onChange({
            ...value,
            actions: newActions
          })
        }}
      />
    )
  }

  if (type === 'root' && editingAction !== undefined) {
    return (
      // @ts-expect-error next-line I don't know how to fix it
      <Traverser
        value={value.actions[editingAction]}
        breadcrumbs={[...breadcrumbs, { label: 'Root', onClick: () => { setEditingAction(undefined) } }]}
        type={value.actions[editingAction].type}
        onChange={(modifiedAction: Command | Menu) => {
          const newActions: Action[] = [...value.actions.slice(0, editingAction), modifiedAction, ...value.actions.slice(editingAction + 1)]
          const newActionsForNautilus: ActionsForNautilus = {
            ...value,
            actions: newActions
          }
          onChange(newActionsForNautilus)
        }}
      />
    )
  }

  if (type === 'root') {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Root', onClick: () => { } }]} />
        <RootEditor
          value={value}
          setEditingAction={setEditingAction}
          onChange={onChange}
        />
      </>
    )
  }
  return (
    <>
      <Breadcrumbs items={[...breadcrumbs, { label: value.label, onClick: () => { } }]} />
      {type === 'command' && (
        <CommandEditor
          value={value}
          onChange={onChange}
        />
      )}
      {type === 'menu' && (
        <MenuEditor
          value={value}
          onChange={onChange}
          setEditingAction={setEditingAction}
        />
      )}
    </>
  )
}

export default Traverser

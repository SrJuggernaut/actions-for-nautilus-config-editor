import CommandEditor from '@/components/ActionEditor/CommandEditor'
import MenuEditor from '@/components/ActionEditor/MenuEditor'
import Breadcrumbs, { type ActionBreadcrumbItem } from '@/components/Breadcrumbs'
import RootEditor from '@/components/RootEditor'
import { isActionsForNautilus, isCommand, isMenu, type Action, type ActionsForNautilus } from '@/schemas/ActionsForNautilus'
import { useState, type FC } from 'react'

interface TraverserActionsProps {
  value: Action
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: Action) => void
}
interface TraverserActionsForNautilusProps {
  value: ActionsForNautilus
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: ActionsForNautilus) => void
}

const Traverser: FC<TraverserActionsProps | TraverserActionsForNautilusProps> = ({ breadcrumbs, onChange, value }) => {
  const [editingAction, setEditingAction] = useState<number | undefined>(undefined)

  if (editingAction !== undefined && isMenu(value)) {
    return (
      <Traverser
        value={value.actions[editingAction]}
        breadcrumbs={[...breadcrumbs, { label: value.label, onClick: () => { setEditingAction(undefined) } }]}
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
  if (editingAction !== undefined && isActionsForNautilus(value)) {
    return (
      <Traverser
        value={value.actions[editingAction]}
        breadcrumbs={[...breadcrumbs, { label: 'Root', onClick: () => { setEditingAction(undefined) } }]}
        onChange={(modifiedAction: Action) => {
          const newActions: Action[] = [...value.actions.slice(0, editingAction), modifiedAction, ...value.actions.slice(editingAction + 1)]
          const newActionsForNautilus: ActionsForNautilus = {
            ...value,
            actions: newActions
          }
          // @ts-expect-error Typescript does not understand that if value is ActionsForNautilus, then  onchange is (value: ActionsForNautilus) => void
          onChange(newActionsForNautilus)
        }}
      />
    )
  }

  if (isActionsForNautilus(value)) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Root', onClick: () => { } }]} />
        <RootEditor
          value={value}
          setEditingAction={setEditingAction}
          // @ts-expect-error Typescript does not understand that if value is ActionsForNautilus, then  onchange is (value: ActionsForNautilus) => void
          onChange={onChange}
        />
      </>
    )
  }

  return (
    <>
      <Breadcrumbs items={[...breadcrumbs, { label: value.label, onClick: () => { } }]} />
      {isCommand(value) && (
        <CommandEditor
          value={value}
          // @ts-expect-error Typescript does not understand that if value is Command, then  onchange is (value: Command) => void
          onChange={onChange}
        />
      )}
      {isMenu(value) && (
        <MenuEditor
          value={value}
          // I don't know why typescript here understands that if value is Menu, then  onchange is (value: Menu) => void
          onChange={onChange}
          setEditingAction={setEditingAction}
        />
      )}
    </>
  )
}

export default Traverser

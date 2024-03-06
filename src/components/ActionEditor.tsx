import CommandEditor from '@/components/ActionEditor/CommandEditor'
import MenuEditor from '@/components/ActionEditor/MenuEditor'
import BreadCrumbs, { type ActionBreadcrumbItem } from '@/components/Breadcrumbs'
import { type Action } from '@/schemas/ActionsForNautilus'
import { useState, type FC } from 'react'

interface ActionEditorProps {
  value: Action
  breadcrumbs: ActionBreadcrumbItem[]
  onChange: (value: Action) => void
}

const ActionEditor: FC<ActionEditorProps> = ({ value, breadcrumbs, onChange }) => {
  const [editingAction, setEditingAction] = useState<number | undefined>(undefined)

  if (editingAction !== undefined && value.type === 'menu') {
    return <ActionEditor
      value={value.actions[editingAction]}
      breadcrumbs={[...breadcrumbs, { label: value.label, onClick: () => { setEditingAction(undefined) } }]}
      onChange={(modifiedAction) => {
        const newActions = [...value.actions.slice(0, editingAction), modifiedAction, ...value.actions.slice(editingAction + 1)]
        onChange({
          ...value,
          actions: newActions
        })
      }}
    />
  }

  return (
    <>
      <BreadCrumbs items={[...breadcrumbs, { label: value.label, onClick: () => { } }]} />
      {value.type === 'command' && (
        <CommandEditor
          value={value}
          onChange={onChange}
        />
      )}
      {value.type === 'menu' && (
        <MenuEditor
          value={value}
          onChange={onChange}
          setEditingAction={setEditingAction}
        />
      )}
    </>
  )
}

export default ActionEditor

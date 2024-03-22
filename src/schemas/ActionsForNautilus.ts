import { z } from 'zod'

export const sortStylesSchema = z.union([
  z.literal('manual'),
  z.literal('auto')
], {
  invalid_type_error: 'Invalid sort style',
  required_error: 'Sort style is required'
})

export type SortStyles = z.infer<typeof sortStylesSchema>

export const permissionsSchema = z.union([
  z.literal('read'),
  z.literal('read-write'),
  z.literal('read-execute'),
  z.literal('read-write-execute')
], {
  invalid_type_error: 'Invalid Access Permissions',
  required_error: 'Access Permissions is required'
})

export type Permissions = z.infer<typeof permissionsSchema>

export const fileTypeSchema = z.union([
  z.literal('unknown'),
  z.literal('file'),
  z.literal('directory'),
  z.literal('symbolic-link'),
  z.literal('special'),
  z.literal('shortcut'),
  z.literal('mountable'),
  z.literal('standard'),
  z.literal('!unknown'),
  z.literal('!file'),
  z.literal('!directory'),
  z.literal('!symbolic-link'),
  z.literal('!special'),
  z.literal('!shortcut'),
  z.literal('!mountable'),
  z.literal('!standard')
], {
  invalid_type_error: 'Invalid File type',
  required_error: 'File type is required'
})

export type FileType = z.infer<typeof fileTypeSchema>

export const commandSchema = z.object({
  type: z.literal('command', { required_error: 'Type is required' }),
  label: z.string({ required_error: 'Label is required' }).min(1, 'Label cannot be empty'),
  command_line: z.string({ required_error: 'Command line is required' }).min(1, 'Command cannot be empty'),
  use_shell: z.boolean({ invalid_type_error: 'Use shell must be a boolean' }).optional(),
  cwd: z.string({ invalid_type_error: 'Current Working Directory must be a string' }).min(1, 'Current Working Directory cannot be empty').optional(),
  min_items: z.number({ invalid_type_error: 'Minimum items must be a number' }).min(1, { message: 'Minimum items cannot be less than 1' }).optional(),
  max_items: z.number({ invalid_type_error: 'Maximum items must be a number' }).min(0, { message: 'Maximum items cannot be less than 0' }).optional(),
  permissions: permissionsSchema.optional(),
  mimetypes: z.array(z.string({ invalid_type_error: 'Mime type must be a string' }).regex(/^(!?[A-Za-z0-9-]+\/(([A-Za-z0-9-]+)|\*))|(\*)|(\*\/\*)$/i, { message: 'Invalid mime type' })).optional(),
  filetypes: z.array(fileTypeSchema, { invalid_type_error: 'File types must be an array' }).optional(),
  path_patterns: z.array(z.string()).optional()
})

export type Command = z.infer<typeof commandSchema>

export const baseMenuSchema = z.object({
  type: z.literal('menu', { required_error: 'Type is required' }),
  label: z.string({ required_error: 'Label is required' }).min(1, 'Label cannot be empty'),
  sort: sortStylesSchema.optional()
})

export const isCommand = (data: unknown): data is Command => commandSchema.safeParse(data).success

export type Menu = z.infer<typeof baseMenuSchema> & {
  actions: Array<Command | Menu>
}

export const menuSchema: z.ZodType<Menu> = baseMenuSchema
  .extend({
    actions: z.lazy(() => z.array(z.union([commandSchema, menuSchema], { invalid_type_error: 'Invalid action' }), { invalid_type_error: 'Invalid actions array' }))
  })

export const isMenu = (data: unknown): data is Menu => menuSchema.safeParse(data).success

export const actionSchema = z.union([commandSchema, menuSchema], { invalid_type_error: 'Invalid action' })

export type Action = z.infer<typeof actionSchema>

export const actionsForNautilusSchema = z.object({
  actions: z.array(z.union([menuSchema, commandSchema], { invalid_type_error: 'Invalid action' }), { invalid_type_error: 'Invalid actions array' }),
  sort: sortStylesSchema.optional(),
  debug: z.boolean({ invalid_type_error: 'Debug must be a boolean' }).optional()
}).strict()

export type ActionsForNautilus = z.infer<typeof actionsForNautilusSchema>

export const defaultCommand: Command = {
  type: 'command',
  label: 'New command',
  command_line: 'echo %f',
  use_shell: undefined,
  cwd: undefined,
  min_items: undefined,
  max_items: undefined,
  permissions: undefined,
  mimetypes: undefined,
  filetypes: undefined,
  path_patterns: undefined
}

export const defaultMenu: Menu = {
  type: 'menu',
  label: 'New menu',
  sort: undefined,
  actions: []
}

export const isActionsForNautilus = (data: unknown): data is ActionsForNautilus => actionsForNautilusSchema.safeParse(data).success

import { CheckGroup } from '@checkly/cli/constructs'

export const websiteGroup = new CheckGroup('website-check-group-1', {
  name: 'Website Group',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
})

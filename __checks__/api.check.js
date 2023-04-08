import { ApiCheck } from '@checkly/cli/dist/constructs'
import { websiteGroup } from './website.check-group'

new ApiCheck('check-group-api-check-1', {
  name: 'Fetch stats for homepage',
  group: websiteGroup,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url:
      process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app/',
    followRedirects: true,
    skipSSL: false,
    assertions: [],
  },
})

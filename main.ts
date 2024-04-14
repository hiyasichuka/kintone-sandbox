import { KintoneRestAPIClient } from '@kintone/rest-api-client'

require('dotenv').config()

const client = new KintoneRestAPIClient({
  baseUrl: process.env.URL,
  // Use password authentication
  // auth: {
  //   username: process.env.KINTONE_USERNAME,
  //   password: process.env.KINTONE_PASSWORD,
  // },
  // Use API token authentication
  auth: { apiToken: process.env.KINTONE_API_TOKEN },
  // Use OAuth token authentication
  // auth: { oAuthToken: process.env.KINTONE_OAUTH_TOKEN }

  // Use session authentication if `auth` is omitted (in browser only)
})

client.record
  .getRecords({ app: '9' })
  .then((resp) => {
    console.log(resp.records)
  })
  .catch((err) => {
    console.log(err)
  })

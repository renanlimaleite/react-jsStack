import { delay } from '../../utils/delay'

// eslint-disable-next-line no-unused-vars
const makeRequest = async (baseURL, path, options) => {
  await delay(500)

  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const response = await fetch(`${baseURL}${path}`, {
    method: options.method,
    body: JSON.stringify(options.body),
    headers
  })

  let responseBody = null
  const contentType = response.headers.get('Content-Type')
  if (contentType.includes('application/json')) {
    responseBody = await response.json()
  }

  if (response.ok) {
    return responseBody
  }

  return response
}

export const BaseHttpClient = (baseURL) => {
  return {
    get: async (path) => {
      await delay(500)

      const response = await fetch(`${baseURL}${path}`)

      if (response.ok) {
        return response.json()
      }

      throw new Error(`${response.status} - ${response.statusText}`)
    }
  }
}

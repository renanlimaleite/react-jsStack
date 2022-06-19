import { delay } from '../../utils/delay'

export const BaseHttpClient = (baseURL) => {
  return {
    get: async (path) => {
      const response = await fetch(`${baseURL}${path}`)

      await delay(500)

      return response.json()
    }
  }
}

import { delay } from '../../utils/delay'

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

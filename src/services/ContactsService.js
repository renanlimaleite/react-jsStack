import { BaseHttpClient } from './utils/HttpClient'

const DefaultHttpClient = BaseHttpClient('http://localhost:3001')

export default {
  listContacts: async (orderBy = 'asc') => {
    return DefaultHttpClient.get(`/contacts?orderBy=${orderBy}`)
  },
  createContact: (contact) => {
    return DefaultHttpClient.post('http://localhost:3001/contacts', contact)
  }
}

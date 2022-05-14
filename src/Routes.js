import { Route, Routes as Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { EditContact } from './pages/EditContact'
import { NewContact } from './pages/NewContact'

export function Routes () {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" exact element={<EditContact />} />
    </Switch>
  )
}

import { ContactForm } from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader/pageHeader'

export function EditContact () {
  return (
    <>
      <PageHeader
        title="Editar Renan Leite"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  )
}

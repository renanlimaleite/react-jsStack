import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'

export function NewContact () {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <Input
        placeholder="Nome"
      />
      <Select>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">
        Salvar alterações
      </Button>

      <Button type="button" disabled={true}>
        Salvar alterações
      </Button>
    </>
  )
}

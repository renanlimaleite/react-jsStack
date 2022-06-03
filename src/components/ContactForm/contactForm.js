import PropTypes from 'prop-types'
import { useState } from 'react'
import useErrors from '../../hooks/useErrors'
import isEmailValid from '../../utils/isEmailValid'
import { Button } from '../Button'
import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { ButtonContainer, Form } from './styles'

export function ContactForm ({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange (event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange (event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('email')
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      category
    })
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
         />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{ buttonLabel }</Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

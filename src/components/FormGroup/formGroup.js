import { Container } from './styles'
import PropTypes from 'prop-types'

export function FormGroup ({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}
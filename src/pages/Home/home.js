import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/Modal'

export function Home () {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow to reoder" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Renan Leite</strong>
              <small>instagram</small>
            </div>
            <span>renan@renan.com</span>
            <span>(21) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit a contact" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete a contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}

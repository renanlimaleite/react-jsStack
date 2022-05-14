import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export function Home () {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Edit a contact" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete a contact" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>John Doe</strong>
              <small>twitter</small>
            </div>
            <span>jonh@doe.com</span>
            <span>(21) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit a contact" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete a contact" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Fulano de Tal</strong>
              <small>linkedin</small>
            </div>
            <span>fulano@detal.com</span>
            <span>(21) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit a contact" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete a contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}

import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all .2s ease-in;
    transition-property: background, color;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`

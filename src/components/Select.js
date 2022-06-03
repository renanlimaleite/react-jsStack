import styled from 'styled-components'

export const Select = styled.select`
  width: 100%;
  background: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0, 0.04);
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`

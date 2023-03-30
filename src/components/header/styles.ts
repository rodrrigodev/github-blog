import styled from 'styled-components'
import background from '../../assets/background-header.png'

export const HeaderContainer = styled.header`
  background-image: url(${background});
  background-repeat: round;
  padding: 4rem 0 8.375rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  img {
    max-width: 2.8125rem;
    width: 100%;
  }

  strong {
    font-family: 'Coda';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`

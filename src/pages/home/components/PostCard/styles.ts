import styled from 'styled-components'

export const ArticleContainer = styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;

  div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme.title};
    max-width: 17.6875rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme.span};
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.text};
    max-width: 22rem;
  }
`

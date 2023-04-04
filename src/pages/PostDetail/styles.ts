import styled from 'styled-components'

export const IssueContainer = styled.main`
  max-width: 59.4rem;
  width: 90%;
  margin: 0 auto;
`
export const TextContainer = styled.div`
  margin: 2.5rem 2rem;

  p {
    color: ${(props) => props.theme.text};
    line-height: 1.6;
  }

  h2 {
    color: ${(props) => props.theme.blue};
    line-height: 1.6;
    margin-top: 2.5rem;
  }
`

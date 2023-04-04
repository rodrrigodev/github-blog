import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;
  margin-top: -5.5rem;
`

export const NavegationContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const IssueDetailContainer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 1.25rem 0 0.5rem 0;
  }

  div {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

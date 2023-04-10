import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 59.4rem;
  width: 90%;
  margin: 0 auto;
`

export const SectionPostsContainer = styled.section`
  margin: 3rem 0 6rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));

  a {
    background-color: ${(props) => props.theme.post};
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

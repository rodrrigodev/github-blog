import styled from 'styled-components'

export const ProfileInfoContainer = styled.section`
  background-color: ${(props) => props.theme.profile};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.text};
    margin: 0.5rem 0 1.5rem 0;
  }
`

export const ProfileImg = styled.img`
  max-width: 9.25rem;
  width: 100%;
  border-radius: 8px;
`
export const UserNameAndGit = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`
export const ProfileDetails = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.subtitle};
    line-height: 1.6;
  }
`

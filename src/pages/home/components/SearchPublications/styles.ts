import styled from 'styled-components'

export const FormContainerSearch = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    span:nth-child(1) {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${(props) => props.theme.subtitle};
    }

    span:nth-child(2) {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.span};
    }
  }

  input {
    background-color: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`

import {
  ArrowSquareOut,
  Calendar,
  CaretCircleLeft,
  ChatText,
  GithubLogo,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import {
  IssueDetailContainer,
  NavegationContainer,
  SectionContainer,
} from './styles'

export function IssueDetail() {
  const theme = useTheme()

  return (
    <SectionContainer>
      <NavegationContainer>
        <a href="">
          <CaretCircleLeft size={18} weight="bold" color={theme.blue} />
          Voltar
        </a>
        <a href="">
          Ver no github
          <ArrowSquareOut size={18} weight="bold" color={theme.blue} />
        </a>
      </NavegationContainer>

      <IssueDetailContainer>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <span>
            <GithubLogo size={20} weight="fill" color={theme.label} />
            cameronwll
          </span>

          <span>
            <Calendar size={20} weight="fill" color={theme.label} />
            Há 1 dia
          </span>

          <span>
            <ChatText size={20} weight="fill" color={theme.label} />5
            comentários
          </span>
        </div>
      </IssueDetailContainer>
    </SectionContainer>
  )
}

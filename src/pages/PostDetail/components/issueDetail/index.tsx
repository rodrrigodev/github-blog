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
import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueDetailProps {
  title?: string
  createdAt?: Date
  issueUrl?: string
  comments?: number
}

export function IssueDetail(data: IssueDetailProps) {
  const theme = useTheme()
  const { createdAt, title, issueUrl, comments } = data
  const date = formatDistance(createdAt || new Date(), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <SectionContainer>
      <NavegationContainer>
        <Link to="/">
          <CaretCircleLeft size={18} weight="bold" color={theme.blue} />
          Voltar
        </Link>

        <a href={issueUrl || '/'} target="_blank" rel="noreferrer">
          Ver no github
          <ArrowSquareOut size={18} weight="bold" color={theme.blue} />
        </a>
      </NavegationContainer>

      <IssueDetailContainer>
        <h1>{title}</h1>
        <div>
          <span>
            <GithubLogo size={20} weight="fill" color={theme.label} />
            rodrrigodev
          </span>

          <span>
            <Calendar size={20} weight="fill" color={theme.label} />
            {date}
          </span>

          <span>
            <ChatText size={20} weight="fill" color={theme.label} />
            {`${comments} `}
            comentários
          </span>
        </div>
      </IssueDetailContainer>
    </SectionContainer>
  )
}

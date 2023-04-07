import { formatDistanceToNow } from 'date-fns'
import { cutTexts } from '../../../../utils/cutText'
import { ArticleContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  title: string
  post: string
  createdAt: Date
}

export function PostCard(postInfo: PostCardProps) {
  const { post, title, createdAt } = postInfo
  const date = formatDistanceToNow(createdAt, { locale: ptBR, addSuffix: true })
  return (
    <ArticleContainer>
      <div>
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <ReactMarkdown>{cutTexts.cutPost(post)}</ReactMarkdown>
    </ArticleContainer>
  )
}

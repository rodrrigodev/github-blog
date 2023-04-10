import { formatDistance } from 'date-fns'
import { cutTexts } from '../../../../utils/cutText'
import { ArticleContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface PostCardProps {
  id: number
  title: string
  post: string
  createdAt: Date
}

export function PostCard(postInfo: PostCardProps) {
  const { post, title, createdAt, id } = postInfo
  const date = formatDistance(createdAt, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Link to={`/postdetail/${id}`}>
      <ArticleContainer>
        <div>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>
        <ReactMarkdown>{cutTexts.cutPost(post)}</ReactMarkdown>
      </ArticleContainer>
    </Link>
  )
}

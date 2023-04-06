import { ArticleContainer } from './styles'

interface PostCardProps {
  title: string
  post: string
  created_at: Date
}

export function PostCard(post: PostCardProps) {
  return (
    <ArticleContainer>
      <div>
        <h1>{post.title}</h1>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </ArticleContainer>
  )
}

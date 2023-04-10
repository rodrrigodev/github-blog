import { useEffect, useState } from 'react'
import { IssueDetail } from './components/issueDetail'
import { IssueContainer, TextContainer } from './styles'
import { ApiPosts } from '../../contexts/GithubContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

interface PostProps {
  id: number
  post: string
  commentsAmount: number
  createdAt: Date
  title: string
  issueUrl: string
}

export function PostDetail() {
  const [postDetails, setPostDetails] = useState<PostProps | undefined>(
    undefined,
  )
  const post = postDetails?.post

  const { postId } = useParams<{ postId: string }>()

  useEffect(() => {
    async function getPostById() {
      const response: ApiPosts = (
        await api.get(`/repos/rodrrigodev/github-blog/issues/${postId}`)
      ).data
      console.log(response)
      const { body, comments, number, title } = response
      setPostDetails({
        id: number,
        title,
        post: body,
        commentsAmount: comments,
        createdAt: new Date(response.created_at),
        issueUrl: `https://github.com/rodrrigodev/github-blog/issues/${postId}`,
      })
    }

    getPostById()
  }, [postId])

  return (
    <IssueContainer>
      <IssueDetail
        title={postDetails?.title}
        createdAt={postDetails?.createdAt}
        issueUrl={postDetails?.issueUrl}
        comments={postDetails?.commentsAmount}
      />

      <TextContainer>
        {post && <ReactMarkdown>{post}</ReactMarkdown>}
      </TextContainer>
    </IssueContainer>
  )
}

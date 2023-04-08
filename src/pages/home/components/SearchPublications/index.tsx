import { useForm } from 'react-hook-form'
import { ApiPosts, GithubContext } from '../../../../contexts/GithubContext'
import { FormContainerSearch } from './styles'
import { useContext, useState } from 'react'
import { api } from '../../../../lib/axios'

type QueryParams = {
  query: string
}

interface ResponseProps {
  items: ApiPosts[]
}

export function SearchPublications() {
  const { posts, updatePosts, getPosts } = useContext(GithubContext)
  const postsAmount = posts?.length
  const { handleSubmit, register, watch } = useForm<QueryParams>()
  const queryIsEmpty = watch('query')
  const [update, setUpdate] = useState(false)

  async function searchPost(query: string) {
    const response: ResponseProps = (
      await api.get(
        `/search/issues?q=${query}/repo:rodrrigodev/github-blog/issues`,
      )
    ).data

    const data = response.items.map((data) => {
      const { body, comments, number, title } = data
      return {
        id: number,
        title,
        post: body,
        createdAt: new Date(data.created_at),
        commentsAmount: comments,
      }
    })

    setUpdate(true)
    updatePosts(data)
  }

  function queryParams(data: QueryParams) {
    searchPost(data.query)
  }

  if (update && !queryIsEmpty) {
    getPosts()
    setUpdate(false)
  }

  return (
    <FormContainerSearch onSubmit={handleSubmit(queryParams)}>
      <div>
        <span>Publicações</span>
        <span>{postsAmount} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormContainerSearch>
  )
}

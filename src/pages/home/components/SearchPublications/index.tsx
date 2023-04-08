import { useForm } from 'react-hook-form'
import { ApiPosts, GithubContext } from '../../../../contexts/GithubContext'
import { FormContainerSearch } from './styles'
import { useContext } from 'react'
import { api } from '../../../../lib/axios'

type QueryParams = {
  query: string
}

interface ResponseProps {
  items: ApiPosts[]
}

export function SearchPublications() {
  const { posts } = useContext(GithubContext)
  const postsAmount = posts?.length
  const { handleSubmit, register } = useForm<QueryParams>()

  async function searchPost(query: string) {
    const response: ResponseProps = (
      await api.get(
        `/search/issues?q=${query}/repo:rodrrigodev/github-blog/issues`,
      )
    ).data
    console.log(response)
  }

  function queryParams(data: QueryParams) {
    searchPost(data.query)
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

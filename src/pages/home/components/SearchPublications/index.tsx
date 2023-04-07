import { GithubContext } from '../../../../contexts/GithubContext'
import { FormContainerSearch } from './styles'
import { useContext } from 'react'

export function SearchPublications() {
  const { posts } = useContext(GithubContext)
  const postsAmount = posts?.length

  return (
    <FormContainerSearch>
      <div>
        <span>Publicações</span>
        <span>{postsAmount} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainerSearch>
  )
}

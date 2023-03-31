import { FormContainerSearch } from './styles'

export function SearchPublications() {
  return (
    <FormContainerSearch>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainerSearch>
  )
}

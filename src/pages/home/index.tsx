import { ProfileCard } from './components/profileCard'
import { SearchPublications } from './components/SearchPublications'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchPublications />
    </HomeContainer>
  )
}

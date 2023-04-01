import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/profileCard'
import { SearchPublications } from './components/SearchPublications'
import { HomeContainer, SectionPostsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchPublications />

      <SectionPostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </SectionPostsContainer>
    </HomeContainer>
  )
}

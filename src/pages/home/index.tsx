import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/profileCard'
import { SearchPublications } from './components/SearchPublications'
import { HomeContainer, SectionPostsContainer } from './styles'

export function Home() {
  const { posts } = useContext(GithubContext)

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchPublications />

      <SectionPostsContainer>
        {posts?.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post.post}
              created_at={post.createdtAt}
              title={post.title}
            />
          )
        })}
      </SectionPostsContainer>
    </HomeContainer>
  )
}

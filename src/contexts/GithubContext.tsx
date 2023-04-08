import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ApiProps {
  name: string
  login: string
  bio: string
  company: string
  avatar_url: string
  followers: number
  html_url: string
}

interface UserInfoProps {
  name: string
  login: string
  bio: string
  company: string
  avatar: string
  followers: number
  url: string
}

export interface ApiPosts {
  number: number
  body: string
  comments: number
  created_at: string
  title: string
}

interface PostsProps {
  id: number
  post: string
  commentsAmount: number
  createdtAt: Date
  title: string
}

interface GithubContextType {
  userInfo?: UserInfoProps
  posts?: PostsProps[]
  updatePosts: (posts: PostsProps[]) => void
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubContextProviderProps {
  children: ReactNode
}

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoProps>()
  const [posts, setPosts] = useState<PostsProps[]>()

  async function getUserInfo() {
    const response: ApiProps = (await api.get('/users/rodrrigodev')).data
    const {
      avatar_url: avatar,
      bio,
      followers,
      login,
      name,
      company,
      html_url: url,
    } = response
    setUserInfo({ avatar, bio, followers, login, name, company, url })
  }

  async function getPosts() {
    const response: ApiPosts[] = (
      await api.get('/repos/rodrrigodev/github-blog/issues')
    ).data

    const posts = response.map((post) => {
      return {
        post: post.body,
        id: post.number,
        createdtAt: new Date(post.created_at),
        commentsAmount: post.comments,
        title: post.title,
      }
    })

    posts ? setPosts(posts) : console.log('Houve um error')
  }

  function updatePosts(post: PostsProps[]) {
    setPosts(post)
  }

  useEffect(() => {
    getUserInfo()
    getPosts()
  }, [])
  return (
    <GithubContext.Provider value={{ userInfo, posts, updatePosts }}>
      {children}
    </GithubContext.Provider>
  )
}

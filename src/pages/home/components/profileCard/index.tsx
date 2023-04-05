import {
  GithubLogo,
  Buildings,
  Users,
  ArrowSquareOut,
} from '@phosphor-icons/react'
import {
  ProfileDetails,
  ProfileImg,
  ProfileInfoContainer,
  UserNameAndGit,
} from './styles'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface ApiProps {
  name: string
  login: string
  bio: string
  company?: string
  avatar_url: string
  followers: number
}

interface UserInfoProps {
  name: string
  login: string
  bio: string
  company?: string
  avatar: string
  followers: number
}

export function ProfileCard() {
  const theme = useTheme()

  const [userInfo, setUserInfo] = useState<UserInfoProps>()

  async function getUserInfo() {
    const response: ApiProps = await (await api.get('/users/rodrrigodev')).data

    const {
      avatar_url: avatar,
      bio,
      followers,
      login,
      name,
      company,
    } = response
    setUserInfo({ avatar, bio, followers, login, name, company })
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <ProfileInfoContainer>
      <ProfileImg src={userInfo?.avatar} alt="" />

      <div>
        <UserNameAndGit>
          <strong>{userInfo?.name}</strong>
          <a href="">
            Github <ArrowSquareOut size={20} weight="bold" color={theme.blue} />
          </a>
        </UserNameAndGit>
        <p>{userInfo?.bio}</p>
        <ProfileDetails>
          <span>
            <GithubLogo size={20} weight="fill" color={theme.label} />
            {userInfo?.login}
          </span>

          <span>
            <Buildings size={20} weight="fill" color={theme.label} />
            {userInfo?.company}
          </span>

          <span>
            <Users size={20} weight="fill" color={theme.label} />
            {userInfo?.followers} seguidores
          </span>
        </ProfileDetails>
      </div>
    </ProfileInfoContainer>
  )
}

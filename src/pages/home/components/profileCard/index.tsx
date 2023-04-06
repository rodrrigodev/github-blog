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
import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

export function ProfileCard() {
  const theme = useTheme()
  const { userInfo } = useContext(GithubContext)

  return (
    <ProfileInfoContainer>
      <ProfileImg src={userInfo?.avatar} alt="" />

      <div>
        <UserNameAndGit>
          <strong>{userInfo?.name}</strong>
          <a href={userInfo?.url} target="_blank" rel="noreferrer">
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

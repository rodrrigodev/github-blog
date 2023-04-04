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

export function ProfileCard() {
  const theme = useTheme()
  return (
    <ProfileInfoContainer>
      <ProfileImg
        src="https://avatars.githubusercontent.com/u/4248081?v=4"
        alt=""
      />

      <div>
        <UserNameAndGit>
          <strong>Cameron Williamson</strong>
          <a href="">
            Github <ArrowSquareOut size={20} weight="bold" color={theme.blue} />
          </a>
        </UserNameAndGit>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileDetails>
          <span>
            <GithubLogo size={20} weight="fill" color={theme.label} />
            cameronwll
          </span>

          <span>
            <Buildings size={20} weight="fill" color={theme.label} />
            Rocketseat
          </span>

          <span>
            <Users size={20} weight="fill" color={theme.label} />
            32 seguidores
          </span>
        </ProfileDetails>
      </div>
    </ProfileInfoContainer>
  )
}

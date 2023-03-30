import { GithubLogo, Buildings, Users } from '@phosphor-icons/react'
import {
  ProfileDetails,
  ProfileImg,
  ProfileInfoContainer,
  UserNameAndGit,
} from './styles'
import link from '../../../../assets/link.svg'
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
            Github <img src={link} alt="" />
          </a>
        </UserNameAndGit>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileDetails>
          <span>
            <GithubLogo size={18} weight="fill" color={theme.label} />
            cameronwll
          </span>

          <span>
            <Buildings size={18} weight="fill" color={theme.label} />
            Rocketseat
          </span>

          <span>
            <Users size={18} weight="fill" color={theme.label} />
            32 seguidores
          </span>
        </ProfileDetails>
      </div>
    </ProfileInfoContainer>
  )
}

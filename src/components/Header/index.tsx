import * as S from './styles';
import logoImg from '@assets/logo.png';
import profileImg from '@assets/profile.png';

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      
      <S.ProfileContainer>
        <S.Profile source={profileImg} />
      </S.ProfileContainer>
    </S.Container>
  );
}
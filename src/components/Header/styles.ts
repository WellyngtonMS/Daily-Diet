import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileContainer = styled.View`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`;
import styled, { css } from 'styled-components/native';
import { Plus } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 24px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const TitleSection = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    margin-bottom: 8px;
  `}
`;
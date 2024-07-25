import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  variant?: 'primary' | 'secondary';
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
  border-width: 1px;
  border-color: ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_200};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 20px;
  gap: 16px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`;

export const Icon = styled(TouchableOpacity)`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
`;


import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  type: 'GOOD' | 'BAD';
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 24px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'GOOD' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
    margin-bottom: 8px;
    text-align: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ImageWrapper = styled.View`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
`;

export const Image = styled.Image``;
import styled, { css } from 'styled-components/native';

type Props = {
  variant: 'full' | 'half';
  type?: 'GOOD' | 'BAD';
};

export const Container = styled.View<Props>`
  border-radius: 8px;
  padding: 20px 16px;
  margin-bottom: 12px;

  ${({ variant }) => variant === 'full' && css`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  `}

  ${({ variant, type }) => variant === 'half' && css`
    width: 50%;
    background-color: ${({ theme }) => type === 'GOOD' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  `}
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
`;
import styled, { css } from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type ButtonIconTypeStyleProps = 'GOOD' | 'BAD';
export type isBackButtonProps = boolean;

type Props = {
  type: ButtonIconTypeStyleProps;
  showBackButton?: isBackButtonProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => type === 'GOOD' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  border-radius: 8px;
  padding: ${({ showBackButton }) => showBackButton ? '12px 24px' : '20px 16px'};
  margin-bottom: 36px;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'GOOD' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100,
  size: 24,
}))``;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  color: type === 'GOOD' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100,
  size: 24,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
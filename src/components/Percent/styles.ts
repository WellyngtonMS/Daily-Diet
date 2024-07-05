import styled from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  border-radius: 8px;
  padding: 20px 16px;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 0;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100,
  size: 24,
}))``;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100,
  size: 24,
}))``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
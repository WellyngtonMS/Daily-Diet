import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  padding: 12px 24px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;
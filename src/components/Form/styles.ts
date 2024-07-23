import styled, { css } from 'styled-components/native';
import { Circle } from 'phosphor-react-native';

type Props = {
  isSelected: boolean;
  type?: 'GOOD' | 'BAD';
};

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_500};
  `}
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border-width: 1px;
`;

export const WrapperInput = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperText = styled.View`
  flex: 1;
  margin-right: 20px;
  margin-bottom: 24px;
`;

export const Content = styled.TouchableOpacity<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-width: 1px;
  border-style: solid;
  
  ${({ theme, isSelected, type }) => isSelected && type === 'GOOD' && css`
    background-color: ${theme.COLORS.GREEN_300};
    border-color: ${theme.COLORS.GREEN_100};
    border-width: 1px;
    border-style: solid;
  `}

  ${({ theme, isSelected, type }) => isSelected && type === 'BAD' && css`
    background-color: ${theme.COLORS.RED_300};
    border-color: ${theme.COLORS.RED_100};
    border-width: 1px;
    border-style: solid;
  `}
`;

export const Icon = styled(Circle).attrs(() => ({
  size: 10,
  weight: "fill",
}))``;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY700};
  `}
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.RED_100};
  `}
`;

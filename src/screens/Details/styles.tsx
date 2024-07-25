import styled, { css } from 'styled-components/native';
import { Circle } from 'phosphor-react-native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 40px 24px 10px 24px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 24px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-top: 8px;
`;

export const WrapperTag = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  max-width: 144px;
  height: 34px;
  border-radius: 20px;
  margin-top: 24px;
`;

export const Icon = styled(Circle).attrs(() => ({
  size: 10,
  weight: "fill",
}))``;

export const TextTag = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: 24,
}))``;
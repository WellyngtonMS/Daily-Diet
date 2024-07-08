import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type StatusTypeStyleProps = 'GOOD' | 'BAD';

type Props = {
  status: StatusTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: column;
`;

export const Item = styled.View`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: start;
  gap: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-top: 3px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  border-right-width: 1px;
  border-right-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const TextItem = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Status = styled.View <Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, status }) => status === 'GOOD' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.PRIMARY_BOLD};
  text-align: center;

  margin-bottom: 20px;
`;

export const Slogan = styled.Text`
  color: ${({ theme }) => theme.COLORS.SUBTITLE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SECONDARY_REGULAR};
  text-align: center;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  align-content: center;
  margin-bottom: 32px;
`;
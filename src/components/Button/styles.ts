import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;

  min-height: 56px;
  max-height: 56px;
  min-width: 330px;

  border-radius: 13px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  margin-top: 60px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.PRIMARY_BOLD};
  text-align: center;
`;

export const Loading= styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BACKGROUND
}))``;
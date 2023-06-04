import * as React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components/native';


interface Props {
  loading?: boolean
}

const StyledActivityIndicator = styled(ActivityIndicator)`
color: ${({ theme }) =>
    theme.colors.primary};
flex: 1;
`;
export const LoadingScreen: React.FC<Props> = ({ loading = false }) => {

  if (loading) {
    return <StyledActivityIndicator testID="activity-indicator" />
  }
  return null
}



export default LoadingScreen

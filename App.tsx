import { ThemeProvider } from 'styled-components/native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';

import theme from './src/theme';

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';

import { ANDROID_CLIENT_ID } from '@env';


export default function App() {

  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold, Inter_500Medium, Inter_700Bold })

  if(!fontsLoaded){
    return (
      <Loading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/> 
      <SignIn />
    </ThemeProvider>
  );
}

import { useState } from "react";
import { Alert } from "react-native";
import { Container, Title, Slogan, Logo} from "./styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import logo from '../../assets/logo-lg.png'
import { Button } from "../../components/Button";

import { WEB_CLIENT_ID } from "@env";



GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID
})


export function SignIn(){

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const response = await GoogleSignin.signIn()

      console.log(response)

    } catch (error) {
      console.log(error);
      Alert.alert("Entrar", "Nao foi possível conectar-se a sua conta. ")
      setIsAuthenticating(false);
    }
  }

  return (
    <Container>
      <Logo source={logo}/>

      <Title>
        Encontre os melhores personais da região pelos melhores preços e horários disponíveis
      </Title>

      <Slogan>
        Agende seus treinos em diversos esportes e encontre pessoas para praticar em sua companhia
      </Slogan>

      <Button 
        title="Entrar com Google" 
        isLoading={isAuthenticating} 
        onPress={handleGoogleSignIn}/>
    </Container>
  )
}

import { Container, Title, Slogan, Logo} from "./styles";

import logo from '../../assets/logo-lg.png'
import { Button } from "../../components/Button";

export function SignIn(){
  return (
    <Container>
      <Logo source={logo}/>

      <Title>
        Encontre os melhores personais da região pelos melhores preços e horários disponíveis
      </Title>

      <Slogan>
        Agende seus treinos em diversos esportes e encontre pessoas para praticar em sua companhia
      </Slogan>

      <Button title="Entrar com Google" />
    </Container>
  )
}
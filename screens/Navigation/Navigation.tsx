import React from 'react';
import { View, Image } from 'react-native';

import { ActivityTime, BackBar, BikeText, Container, FrontBar, Header, TextAbove, TextAboveHeader, TextInsideBar } from './styles';

import Map from '../../assets/images/map.png';

interface IITemInterface {
  textAbove: string;
  textInside: string;
  color: string;
  percentage: number;
}
const Item: React.FC<IITemInterface> = ({textAbove, textInside, color, percentage}) => {
  return (
    <View style={{marginBottom: 20}}>
      <TextAbove>{textAbove}</TextAbove>
     <View>
      <BackBar />
        <FrontBar color={color} percentage={percentage}>
          <TextInsideBar>{textInside}</TextInsideBar>
        </FrontBar>
     </View>
    </View>
  );
}

const Navigation: React.FC = () => {
  return (
    <Container>
      <TextAboveHeader>Sexta feira, 13 de Novembro de 2020, 16:57</TextAboveHeader>
      <Header>
        <View>
          <BikeText>Bicicleta</BikeText>
        </View>
        <View style={{justifyContent: "center", alignContent: "center"}}>
          <BikeText>Tempo de atividade:</BikeText>
          <ActivityTime>00:15:13</ActivityTime>
        </View>
      </Header>

      <Image source={Map} style={{width: 400, marginBottom: 20}} />

      <View style={{marginLeft: 20}}>
        <Item textAbove="CARBONO NEUTRALIZADO" textInside="0.3 gg" color="red" percentage={20} />
        <Item textAbove="DISTANCIA PERCORRIDA" textInside="1.7 km" color="blue" percentage={45} />
        <Item textAbove="VELOCIDADE MÉDIA" textInside="18 km/h" color="green" percentage={75} />
        <Item textAbove="GASTO CALORICO" textInside="18 km/h" color="purple" percentage={30} />
        <Item textAbove="PONTOS ACUMULADOS" textInside="12 pontos" color="black" percentage={90} />
      </View>
    </Container>
  )
}

export default Navigation;
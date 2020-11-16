import React from 'react';
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { AvatarImage, BackInfo, Button, ButtonText, Container, Header, HighText, Info, LowText } from './styles';

import ProfileAvatar from '../../assets/images/avatar.jpg';
import { BackCircle, FrontCircle } from '../../components/Stats/styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <AvatarImage source={ProfileAvatar} />
        <HighText style={{marginBottom:10}}>Marcos Santana</HighText>
        <Button>
          <ButtonText>EDITAR MEU PERFIL</ButtonText>
        </Button>
      </Header>

      <BackInfo>
        <Info>
          <View>
            <HighText>50 kg</HighText>
            <LowText>de carbono neutralizado</LowText>
          </View>
          <View>
            <HighText>112 km</HighText>
            <LowText>percorridos</LowText>
          </View>
          <View>
            <HighText>5000 cal</HighText>
            <LowText>queimadas</LowText>
          </View>
        </Info>

        <View >
          <HighText>Você já acumulou</HighText>
        </View>

        <Info>
          <View>
            <BackCircle />
            <FrontCircle>
              <View style={{alignContent: "center", alignItems: "center", marginTop:5}}>
                <MaterialIcons name="attach-money" size={50} color="black" />
              </View>
            </FrontCircle>
          </View>
          <HighText>500 carbonetas</HighText>
        </Info>

        <View style={{margin: 20, marginTop: 30}}>
          <Button>
            <ButtonText>TROCAR EM LOJAS PARCEIRAS</ButtonText>
          </Button>
        </View>
      </BackInfo>
    </Container>
  )
}

export default Profile;
import React from 'react';
import { View } from 'react-native';
import Stats from '../../components/Stats/Stats';

import { Avatar, Container, Header, Share, ShareText, StatsLabel, UserName, Welcome } from './styles';

import ProfileAvatar from '../../assets/images/avatar.jpg';

const Home: React.FC = () => {
  return (<Container>
      <Header>
      <View>
        <Welcome>Olá,</Welcome>
        <UserName>Marcos</UserName>
      </View>
      <Avatar source={ProfileAvatar}/>
      </Header>
      <StatsLabel>Hoje</StatsLabel>
      <Stats/>
      <Share>
        <ShareText>COMPARTILHAR</ShareText>
      </Share>
      <StatsLabel>Seus últimos 7 dias</StatsLabel>
      <Stats/>
      <Share>
        <ShareText>COMPARTILHAR</ShareText>
      </Share>
      <StatsLabel>Seus últimos 30 dias</StatsLabel>
      <Stats/>
      <Share>
        <ShareText>COMPARTILHAR</ShareText>
      </Share>
  </Container>)
}

export default Home;
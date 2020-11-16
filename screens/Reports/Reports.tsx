import React from 'react';
import { View } from 'react-native';
import { Container, Complement, Description, InputLabel, Label, Number, Street, PhotoUpload, SubmitButton, SubmitText } from './styles';

import { Ionicons } from '@expo/vector-icons';

const Reports: React.FC = () => {
  return (
    <Container>
      <View>
        <Label>Carregar Foto</Label>
        <PhotoUpload>
          <Ionicons name="ios-camera" size={100} color="black" />
        </PhotoUpload>
      </View>

      <View style={{marginBottom: 20}}>
        <Label>Inserir Endereço</Label>

        <InputLabel>Rua/Avenida</InputLabel>
        <Street/>

        <InputLabel>Número</InputLabel>
        <Number/>

        <InputLabel>Complemento</InputLabel>
        <Complement/>
      </View>

      <View style={{marginBottom: 20}}>
        <Label>Descrição</Label>
        <Description />
      </View>

      <SubmitButton>
        <SubmitText>SUBMETER</SubmitText>
      </SubmitButton>

    </Container>
  )
}

export default Reports;
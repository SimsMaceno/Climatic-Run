import React from 'react';
import { View } from 'react-native';

import { BackBar, BackCircle, Container, FrontBar, FrontCircle, Statistic, StatisticPercentage } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

const Stats: React.FC = () => {
  return (
    <Container>
        <View>
            <BackCircle />
            <FrontCircle />
            <Ionicons name="ios-trophy" size={45} color="black" style={{position: "relative", left: 20, top: -40} } />
        </View>
        <View>
            <View style={{marginBottom: 5}}>
                <View style={{flexDirection: "row"}}>
                    <Statistic>Estatistica 1: </Statistic>
                    <StatisticPercentage>75%</StatisticPercentage>
                </View>
                <View>
                    <BackBar />
                    <FrontBar />
                </View>
            </View>
            <View style={{marginBottom: 5}}>
                <View style={{flexDirection: "row"}}>
                    <Statistic>Estatistica 2: </Statistic>
                    <StatisticPercentage>75%</StatisticPercentage>
                </View>
                <View>
                    <BackBar />
                    <FrontBar />
                </View>
            </View>
            <View style={{marginBottom: 5}}>
                <View style={{flexDirection: "row"}}>
                    <Statistic>Estatistica 3: </Statistic>
                    <StatisticPercentage>75%</StatisticPercentage>
                </View>
                <View>
                    <BackBar />
                    <FrontBar />
                </View>
            </View>
        </View>
    </Container>
  )
}

export default Stats;
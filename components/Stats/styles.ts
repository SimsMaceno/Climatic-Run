import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    background-color: #F1FFF1;
    margin-bottom: 10px;
`;

export const StatisticPercentage = styled.Text`
    font-family: 'Roboto';
    font-size: 16px;
`;

export const Statistic = styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
`;

export const BackBar = styled.View`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 150px;
    height: 15px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
`;


export const FrontBar = styled.View`
    position: relative;
    left: 0px;
    top: 0px;
    width: 112px;
    height: 15px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #2FDC95;
`;

export const BackCircle = styled.View`
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #2FDC95;
`;

export const FrontCircle = styled.View`

    position: relative;
    left: 10px;
    top: 10px;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background-color: #fff;
`;
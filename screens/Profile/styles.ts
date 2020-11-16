import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    margin-top: 100px;
    align-items: center;
    align-content: center;
`;


export const AvatarImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: #000;
    margin-bottom: 20px;
`;

export const BackInfo = styled.View`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #F1FFF1;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Info = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    align-content: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #2FDC95;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
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

export const HighText= styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 22px;
    text-align: center;
`;

export const LowText= styled.Text`
    width: 85px;
    height: 50px;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 14px;
    text-align: center;
`;
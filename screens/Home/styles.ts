import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #fff;
    padding: 50px 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 25px;
`;

export const Welcome = styled.Text`
    font-family: 'Roboto';
    font-size: 24px;
`;

export const UserName = styled.Text`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: bold;
`;

export const Avatar = styled.Image`
    height: 45px;
    width: 45px;
    border-radius: 45px;
    background-color: #000;
`;

export const StatsLabel = styled.Text`
    font-family: 'Roboto';
    font-size: 16px;
`;

export const Share = styled.TouchableOpacity`
    background-color: #2FDC95;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const ShareText = styled.Text`
    color: #fff;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
`;
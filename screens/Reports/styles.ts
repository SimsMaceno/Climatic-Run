import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 50px 20px;
`;

export const Label = styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 16px;
`;

export const PhotoUpload = styled.View`
    height: 200px;
    background-color: rgba(47, 220, 149, 0.15);
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Street = styled.TextInput`
    border: 1px solid black;
`;
export const Number = styled.TextInput`
    border: 1px solid black;
`;
export const Complement = styled.TextInput`
    border: 1px solid black;
`;
export const Description = styled.TextInput`
    border: 1px solid black;
    height: 125px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: #2FDC95;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const SubmitText = styled.Text`
    color: #fff;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
`;
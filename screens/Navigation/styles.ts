import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 50px 0px;
`;

export const TextAboveHeader = styled.Text`
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 300;
    margin-left: 10px;
`;

export const Header = styled.View`
    background-color: #2FDC95;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 0 20px;
`;

export const BikeText = styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

export const TextAbove = styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    text-align: left;
`;


export const ActivityTime = styled.Text`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 22px;
    text-align: center;
`;

export const BackBar = styled.View`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 345px;
    height: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
`;

interface FrontBarProps {
    readonly color?: string;
    readonly percentage?: number;
};

export const FrontBar = styled.View<FrontBarProps>`
    position: relative;
    left: 0px;
    top: 0px;
    width: ${props => props.percentage ? (345*props.percentage)/100 : 112}px;
    height: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${props => props.color ? props.color : '#2FDC95'};
`;

interface FrontBarProps {
    readonly color?: string;
}

export const TextInsideBar = styled.Text<FrontBarProps>`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.color ? props.color : '#fff'};
`;
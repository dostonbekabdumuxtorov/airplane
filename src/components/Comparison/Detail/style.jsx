import styled from "styled-components";
import {mainColor, specialColor} from '../../../constants/customStyle';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`

export const Title = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 15px;
    border-left:7px solid orange ;
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    /* background-color: #ebfaff; */
    border-radius: 3px;
    @media (max-width:500px){
        font-size: 18px;
    }
`


export const GreenBox = styled.div`
    display: inline-block !important;
    background-color: green !important;
    color: white !important;
    padding: 3px;
    height: 22px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
` 
export const BlueBox = styled.div`
    display: inline-block !important;
    background-color: #ba53ff !important;
    color: white !important;
    padding: 3px;
    height: 22px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
` 
export const YellowBox = styled.div`
    display: inline-block !important;
    background-color: #ffd105 !important;
    color: white !important;
    padding: 3px;
    height: 22px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
` 

export const SpecialTitle = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #76ddff;
    @media (max-width:500px){
        font-size: 17px;
    }
`
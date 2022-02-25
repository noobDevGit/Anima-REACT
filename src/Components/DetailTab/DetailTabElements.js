import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";


export const Container = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    `
export const MainScoreHeader = styled.div`

    width: 90%;
    height: 100px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 35px;
    background-color: #20AFA1 ;

`
export const ScoreDiv = styled.div`

    width: 120px;
    height: 100%;
    background-color:  #20AFA1;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid white;

`

export const FlexContainer = styled.div`
    
    
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color:  #20AFA1;

`

export const FlexTop = styled.div`

    width: 400px;
    height: 70%;
    display: flex;
    background-color: #20AFA1;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 10px;


`

export const FlexBottom = styled.div`

    width: 400px;
    height: 30%;
    display: flex;
    background-color:  #20AFA1;
    color: white;


`

export const ScoreTitle = styled.p`

    
    font-family: 'Fredoka One', cursive;
    font-size: 11px;
    font-style: normal;
    background-color: white;
    width: 75px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    color: black;
 
`

export const Score = styled.p`

    font-family: 'Fredoka One', cursive;
    font-size: 26px;
    font-style: normal;
    
`

export const UserScore = styled.p`

    font-family: 'Fredoka One', cursive;
    font-size: 10px;
    font-style: normal;
    
`

export const Rank = styled.p`

    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    
`

export const EditP = styled.p`

    font-family: 'Open Sans', sans-serif;
    height: 100%;
    font-size: 11px;
    font-style: normal;
    padding: 0 10px;
    display: flex;
    align-items: center;

`
export const ContentTitleContainer = styled.div`

    width: 100%;
    height: 30px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #20AFA1;
    border-bottom: 1px solid #20AFA1;


`

export const ContentTitlePar = styled.p`

font-family: 'Fredoka One', cursive;
font-size: 14px;

`

export const ContentContainer = styled.div`

width: 100%;
height: auto;
color: white;
font-family: 'Open Sans', sans-serif;
font-size: 12px;
line-height: 1.6;
padding: 10px 0 20px 0;
`

export const RelatedAnimeContent = styled.div`

padding: 5px 0;
font-family: 'Open Sans', sans-serif;
font-size: 12px;
color: white;
border-bottom: 1px solid  #20AFA1;
 

`

export const Va_StaffContainer = styled.div`

display: flex;
flex-direction: column;
width: 100%;
background-color: goldenrod;
height: ${props => props.Height};
flex-wrap: wrap;
`

export const ThemeContainer = styled.div`

    width: 100%;
    height: auto;
    display: flex;
`

export const ThemeHalfContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ThemeContent = styled.div`
    width: 100%;
    height: ${props => props.Height};
    display: flex;
    align-items: center;
    font-family: ${props => props.isTitle?'Fredoka One, cursive':'Open Sans, sans-serif'};
    font-size: ${props => props.isTitle?'14px':'11px'};
    padding: 5px 0;
    color: white;
    ${props => props.isTitle?'border-bottom: 1px solid  #20AFA1;':'11px'};
    
`

export const PlayIcon = styled(AiFillPlayCircle)`
     
     font-size: 25px;
     margin-right: 8px;
`

export const ReviewContainer = styled.div`

    width: 100%;

    height: auto;

`



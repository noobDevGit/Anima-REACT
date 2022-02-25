import styled from "styled-components";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { Link } from "react-router-dom";
import Pic from '../../logo/search.png'



export const BigMenu = styled.div`

display: ${props => props.Open?'block':'none'};
width: 100%;
height: 100vh;
background-color: black;
position: absolute;
z-index: 2;


`
export const Close = styled(AiOutlineCloseCircle)`

 color   : white ;
 position: absolute;
 font-size: 30px;
 z-index: 2;
 right: 10px;
 top: 2px;
 

`

export const SubMenu = styled.div`

    width: 100%;
    height: auto;
    padding: 10px 0;
    text-align:center;
    background-color:   #20AFA1;
    margin-top:${props => props.top?'100px':''}; 


`

export const NewLi = styled(Link)`

text-decoration: none;
color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

export const SearchBarContainer = styled.div`

    width: 100%;
    height: auto;
    padding: 10px 0;

`

export const MobileSearch = styled.div`

display: ${props => props.Open?'flex':'none'};
width: 100%;
height: 100px;
background-color: black;
position: absolute;
z-index: 2;
justify-content: center;
align-items: center;
`

export const CustomInput = styled.input`

    height: 40px;
    width: 600px;
    padding-left: 40px;
    background-image: url(${Pic});
    background-position: 10px 10px;
    background-repeat: no-repeat;
    background-size: 20px;
    border-radius: 5px;
    border: 1px solid #20AFA1;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 10px  #20AFA1;
       
        
    }
  
`
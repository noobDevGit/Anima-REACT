import styled from "styled-components";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { Link } from "react-router-dom";


export const BigMenu = styled.div`

display: ${props => props.Open?'block':'none'};
width: 100%;
height: 100vh;
background-color: black;
position: absolute;
z-index: 2;


`
export const Close = styled(AiOutlineCloseCircle)`

 color   : yellow ;
 position: absolute;
 font-size: 30px;
 z-index: 2;
 right: 13px;
 

`

export const SubMenu = styled.div`

    width: 100%;
    height: auto;
    padding: 10px 0;
    text-align:center;
    background-color: yellow;
    margin-top:${props => props.top?'100px':''}; 


`

export const NewLi = styled(Link)`

text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`
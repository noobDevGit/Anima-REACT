import styled from "styled-components";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import { Link } from "react-router-dom";


export const Container = styled.div`
    background-color: black;
    width: 94%;
    height: 100vh;
    margin: auto;
    padding: 10px 0;

    @media screen and (max-width: 880px){
        width: 100%;
    }
`

export const BtnContainer = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;

`

export const GenreBtn = styled.div`
    width: 20%;
    height: 40px;
    border-bottom: 1px solid #20AFA1;
    display: flex;
    align-items: center;

    @media screen and (max-width: 880px){
        width: 50%;
    }



`

export const TitleDiv = styled.div`
    width: 100%;
    padding: 8px 5px;
    font-family: 'Fredoka One', cursive;
    font-size: 18px;
    color: #20AFA1;
    border-bottom: 1px solid #20AFA1;
    border-top: 1px solid #20AFA1;
    

    
    @media screen and (max-width: 880px){
        text-align: center;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
`

export const ArrowNavright = styled(MdOutlineArrowForwardIos)`

    color: white;
    margin-right: 5px;

`

export const NavLink = styled(Link)`

text-decoration: none;
color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

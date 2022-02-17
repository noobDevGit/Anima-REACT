import styled from "styled-components";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import { Link } from "react-router-dom";


export const Container = styled.div`
    background-color: beige;
    width: 94%;
    height: auto;
    margin: auto;
    padding: 10px 0;

    @media screen and (max-width: 376px){
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
    border: 1px solid black;
    display: flex;
    align-items: center;

    @media screen and (max-width: 376px){
        width: 50%;
    }



`

export const TitleDiv = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Fredoka One', cursive;
    font-size: 18px;
    background-color: blanchedalmond;

    
    @media screen and (max-width: 376px){
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

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

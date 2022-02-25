import styled from "styled-components";
import Pic from '../../logo/search.png';
import {FiMenu, FiSearch} from "react-icons/fi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
width: 100%;
height: 100px;
background-color: #000;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 376px){

height: 65px;

}
`

export const Logo = styled.img`
width: 200px;
height: 100%;
margin-left: 20px;

@media screen and (max-width: 376px){

    width: 100px;
    margin-left:0;
    height: 70%;
   

}

`
export const Ul = styled.ul`    
list-style: none;
display: flex;
flex-direction: row;
width: 150px;
justify-content: space-evenly;

@media screen and (max-width: 880px){

display: none;

}
`


export const Li = styled.li`
font-family: 'Fredoka One', cursive;
color: #20AFA1;
height: 30px;
display: flex;
align-items: center;

&:hover{
border-bottom: solid 3px #20AFA1;
transition: 0.2s ease-out;
cursor: pointer;


}
`


export const SearchBar = styled.form`

margin-right:40px;
border-radius: 5px;

@media screen and (max-width: 880px){

display: none;

}

`


export const CustomInput = styled.input`

    height: 40px;
    width: 250px;
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


export const PhoneMenuContainer = styled.div`

    width: 100px;
    display: none;
    height: 100%;

    @media screen and (max-width: 880px){

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

}

`

export const Menu = styled(FiMenu)`

width: 30px;
height: 30%;
color: white;

`

export const MenuSearch = styled(FiSearch)`

width: 30px;
height: 30%;
color: white;

`

export const NewLi = styled(Link)`

text-decoration: none;
color: #20AFA1;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

export const SearchResultContainer = styled.div`

    width: 350px;
    height: auto;
    position: absolute;
    background-color: black;
    display: ${props => props.Display > 0?'block':'none'}; 
    z-index: 4;
    ${props => props.MobileDisplay !== ''?' display:block; transform: translate(-50%, -50%);top: 690px;left: 50%;':'right: 0px;top: 70px;'}; 
    
   

`

export const WarningText = styled.p`

    width: 100%;
    height: auto;
    font-family: 'Fredoka One', cursive;
    font-size: 14px;
    color: white;
    background-color: #20AFA1;
    display: ${props => props.Display < 3?'block':'none'}; 

`

export const SearchDetailCard = styled.div`

    display: flex;
    width: 100%;
    height: 100px;
    padding: 4px;

`

export const ImgContainer = styled.div`

width: 24%;
height: 100%;
background-color: white;

`

export const SearchCardLeftDetail = styled.div`
width: 76%;
height: 100%;
background-color: white;
display: flex;
flex-direction: column;
padding: 5px;

`

export const MainText = styled.p`


font-family: ${props => props.isTitle?'Fredoka One, cursive':'Open Sans, sans-serif'}; 
font-size: 11px;
display: inline;

`

export const TextWrapperDiv = styled.div`

width: 100%;
height: auto;
flex-direction: row;

`

export const ImgHolder = styled.img`

    height: 100%;
    width: 100%;




`


export const SearchCardContainer = styled.div`

    height: auto;
    width: 100%;
    display: ${props => props.Display < 3 ?'none':'flex'}; 
    flex-direction: column;
    
    

`

export const TypeP= styled.div`
    width: 100%;
    padding: 0 5px;
    font-family:'Fredoka One', cursive ;
    color: white;
    background-color: #20AFA1 ;
`

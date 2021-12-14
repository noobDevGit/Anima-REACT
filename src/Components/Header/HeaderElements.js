import styled from "styled-components";
import Pic from '../../logo/search.png'
import {FiMenu, FiSearch} from "react-icons/fi";

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

@media screen and (max-width: 376px){

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

@media screen and (max-width: 376px){

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

    @media screen and (max-width: 376px){

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

import styled from "styled-components";
import {BsFillPersonFill} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.div`

    width: 94%;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 5px;
    border-top: 1px solid #20AFA1;
 

    @media screen and (max-width: 880px){
    width: 100%;
    

    }
`

export const SmallDeviceRibbon = styled.div`

    display: none;

    @media screen and (max-width: 880px){
    display :flex ;
    flex-direction: column;
    width: 100%;
    height: 55px;
    position: absolute;
    background-color: black;
    bottom: 0;
    padding: 5px 5px;
    opacity: 0.7;
    overflow: hidden;
    

    }


`

export const SmallDeviceBottomRibbon = styled.div`

    display: none;

    @media screen and (max-width: 880px){
    display :flex ;
    flex-direction: row;
    width: 100%;
    height: auto;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    }


`

export const AnimeListCardContainer = styled.div`

    width: 32%;
    height: 370px;
    background-color: black;
    border: 1px solid black;
    margin-bottom: 18px;
    position: relative;
    color: white;

    

    @media screen and (max-width: 880px){
    width: 24%;
    height: 230px;
    

    }

    @media screen and (max-width: 560px){
    width: 49%;
    height: 230px;
    

    }

`



export const AnimeListTitleDiv = styled.div`

    width: 100%;
    height: 70px;
    background-color: #20AFA1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 880px){
    display: none;

    }

`


export const AnimeListDetailRibbon = styled.div`

    width: 100%;
    height: 28px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid #20AFA1;
    
    @media screen and (max-width: 880px){
    display: none;

    }


`

export const AnimeListDetailContainer = styled.div`

    width: 100%;
    height: 215px;
    display: flex;
    border: 1px solid #20AFA1;

    @media screen and (max-width: 880px){

        height: 100%;

    }

`

export const AnimeListImage = styled.div`

    width: 50%;
    height: 100%;
    background-color: firebrick;

    @media screen and (max-width: 880px){
        
        width: 100%;

}

`

export const AnimeListRightContent = styled.div`

    width: 50%;
    height: 100%;
    background-color: white;
    overflow: scroll;
    padding: 3px 5px;
    color: black;

    @media screen and (max-width: 880px){
        
        display: none;

    }


`

export const AnimeListParagraph = styled.p`

    font-size:${props => props.Size};
    font-family: ${props => props.Title?'Fredoka One, cursive':'Open Sans, sans-serif'};
    ${props => props.Genre?
    'background-color: #20AFA1;  margin: 0 4px; border-radius: 3px; padding: 0 5px; ':''}
    margin-bottom: ${props => props.MarginBottom? '10px':''};
    
    

    @media screen and (max-width: 880px){
        
        font-size: 11px;
        color: white;
        
     

}
    
`

export const RightDetailDiv = styled.div`

    width: 100%;
    height: auto;
    border: 1px solid white;
    display:flex;
    flex-wrap: wrap;
    background-color: #20AFA1;
    color: white;
   
`

export const PersonIcon = styled(BsFillPersonFill)`

margin-left: ${props => props.MarginLeft? '100px':''};

`

export const StarIcon = styled(AiFillStar)`




`


export const AnimeListPoster = styled.img`

    width: 100%;
    height: 100%;
 

`


export const NavLink = styled(Link)`

text-decoration: none;
color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

export const PaginateContainer = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

`

export const GenreDiv = styled.div`

    width: 100%;
    padding: 10px 0;
    font-family: Fredoka One, cursive ;
    color: white;

`



import styled from "styled-components";
import {BsFillPersonFill} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.div`

    width: 94%;
    height: auto;
    background-color: chartreuse;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 5px;


`

export const AnimeListCardContainer = styled.div`

    width: 32%;
    height: 370px;
    background-color: cornflowerblue;
    border: 1px solid black;
    margin-bottom: 18px;

`

export const CardContainer = styled.div`

    width: 32%;
    height: 100px;
    background-color: cornflowerblue;
    border: 1px solid black;
    margin-bottom: 18px;

`

export const AnimeListTitleDiv = styled.div`

    width: 100%;
    height: 70px;
    background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


export const AnimeListDetailRibbon = styled.div`

    width: 100%;
    height: 28px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    




`

export const AnimeListDetailContainer = styled.div`

    width: 100%;
    height: 215px;
    display: flex;

`

export const AnimeListImage = styled.div`

    width: 50%;
    height: 100%;
    background-color: firebrick;


`

export const AnimeListRightContent = styled.div`

    width: 50%;
    height: 100%;
    background-color: burlywood;
    overflow: scroll;
    padding: 3px 5px;


`

export const AnimeListParagraph = styled.p`

    font-size:${props => props.Size};
    font-family: ${props => props.Title?'Fredoka One, cursive':'Open Sans, sans-serif'};
    ${props => props.Genre?
    'background-color: burlywood;  margin: 0 4px; border-radius: 3px; padding: 0 5px; ':''}
    margin-bottom: ${props => props.MarginBottom? '10px':''};
    
`

export const RightDetailDiv = styled.div`

    width: 100%;
    height: auto;
    border: 1px solid black;
    display:flex;
    flex-wrap: wrap;
   
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



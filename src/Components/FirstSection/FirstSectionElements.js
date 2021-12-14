import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";


export const FirstSectionContainer = styled.div`

    display: flex;
    height: 83.5vh;
    width: 100%;
    background-color: aqua;
    align-items: center;
    justify-content: center;

`

export const FeaturedAnimeContainer = styled.div`
width: 50%;
height:60%;
background-color: bisque;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const FeaturedTitle = styled.p`

 font-family: 'Fredoka One', cursive;
 font-size: 14px;


`


export const FeaturedAnimeSection = styled.div`
    width: 100%;
    height:92%;
    background-color: beige;
    display: grid;
    grid-template-columns: 35% 65%;

`

export const ImageContainer = styled.div`
    
    width: 100%;
    height: 100%;

`

export const AnimePoster = styled.img`

    width: 100%;
    height: 100%;

`

export const DetailContainer = styled.div`

    width: 100%;
    height: 100%;
    background-color: blueviolet;

`

export const AnimeTitle = styled.p`

font-family: 'Fredoka One', cursive;
font-size: 22px;

`

export const AnimeYear = styled.p`
font-family: 'Poppins', sans-serif;
`

export const DurationNGenre = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 12px;
display: inline;

`

export const StarnRating = styled.div`

display: flex;
flex-direction: row;


`

export const StarIcon = styled(AiFillStar)`


display: inline;
color: yellow;

`

export const AnimeScore = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 12px;
display: inline;`





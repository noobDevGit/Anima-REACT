import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";


export const FirstSectionContainer = styled.div`

    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    background-color:${props => props.Background};
    padding: 10px;

`

export const FeaturedAnimeContainer = styled.div`
margin-top: 50px;
width: 75%;
height:auto;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 376px){
  
  margin-top: 0px;
  width  :100% ;

}

`

export const FeaturedTitle = styled.p`

 font-family: 'Fredoka One', cursive;
 font-size: 14px;
 color:${props => props.textColor};

 @media screen and (max-width: 376px){
  
  margin-top: 10px;

}
 
 
`


export const FeaturedAnimeSection = styled.div`
    width: 100%;
    height:auto;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 35% 65%;

    @media screen and (max-width: 376px){
        
    display : flex ;
    flex-direction: column;
    width  :100% ;
}

  

`

export const ImageContainer = styled.div`
    
    width: 100%;
    height: 93%;

    @media screen and (max-width: 376px){
  
        height: 50%;
}

`

export const AnimePoster = styled.img`

    width: 100%;
    height: 100%;

`

export const DetailContainer = styled.div`

    position: relative;
    width: 100%;
    height: auto;

    
    
`

export const AnimeTitle = styled.p`

font-family: 'Fredoka One', cursive;
font-size: 22px;
margin-bottom: 10px;
color:${props => props.textColor};
`

export const AnimeYear = styled.p`
font-family: 'Poppins', sans-serif;
margin-bottom: 10px;
color:${props => props.textColor};

`

export const DurationNGenre = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 12px;
line-height: 1.8;
display: inline;
color:${props => props.textColor};



`

export const Synopsis = styled.p`


font-family: 'Poppins', sans-serif;
font-size: 12px;
line-height: 1.8;
color:${props => props.textColor};


@media screen and (max-width: 812px){
  
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
 
    
}

@media screen and (max-width: 376px){
  
margin-top: 10px;
    -webkit-line-clamp: 3;

}


`

export const StarnRating = styled.div`


display: flex;
flex-direction: row;
align-items: center;
width: 70px;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 10px;

@media screen and (max-width: 376px){
  

  display: none;

}
`

export const StarIcon = styled(AiFillStar)`


display: inline;
color: yellow;
font-size: 30px;
`

export const AnimeScore = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 17px;
display: inline;
color:${props => props.textColor};`

export const BtnDetailContainer = styled.div`
    
    
    display: flex;
    justify-content: center;
    bottom: 0;
    height: 30px;
    width: 100%;
    margin-top: 10px;

    @media screen and (max-width: 376px){
  

        position: static;
      

}
   


`

export const BtnDetail = styled.div`
    background-color: blue;
    height: 100%;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-family: 'Fredoka One', cursive;
    background-color:${props => props.isLightBg?`#FFFF`:`#20AFA1`};
    color: ${props => props.isLightBg?`#20AFA1`:`#FFFF`};
    border-color: ${props => props.isLightBg?`#20AFA1`:`#FFFF`};
    border-style: ${props => props.isLightBg?`solid`:`none`};
`






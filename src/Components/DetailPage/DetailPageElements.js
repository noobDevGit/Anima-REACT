import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";


export const RootContainer = styled.div`
    background-color: black;
    height: auto;
    width: 100%;
`

export const Container = styled.div`

  margin: auto;
  display: block;
  width: 94%;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 376px){
  
    width: 100%;

}
`

export const Title = styled.div`

    height: 40px;
    width: 100%;
    display: flex;
    color: white;
    align-items: center;
    font-family: 'Fredoka One', cursive;
    font-size: 18px;
    border-top: 1px solid #20AFA1;

    @media screen and (max-width: 376px){
  
  padding: 0 10px;

}
  

`

export const MainContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #20AFA1;

    @media screen and (max-width: 945px){
  
    display: none;
  
  }

`

export const LeftContent = styled.div`

    width: 30%;
    height: 100%;
    padding: 5px;
    
    
`

export const AnimePoster = styled.img`

    width: 100%;
    height: 380px;

    @media screen and (max-width: 945px){
  
        width: 40%;
        height: 100%;
}
    

`

export const AlternativeTitles_title = styled.p`

      width  :100% ;
      height: 20px;
      background-color: #20AFA1;
      font-family: 'Fredoka One', cursive;
      font-size: 14px;
      color: white;


`

export const AlternativeTitles_Container = styled.div`

    width: 100%;
    height: auto;
    background-color: ${props => props.BgClr};
    padding-top: 8px;
    padding-bottom: 16px;
    
    


`

export const AlternativeTitles_content = styled.p`

    width: 100%;
    font-family: 'Fredoka One', cursive;
    font-size: 12px;
    font-style: normal;
    margin-bottom: 10px;
    

`



export const RightContent =styled.div`

    width: 70%;
    height: 100%;
    padding: 5px;
    border-left: 1px solid #20AFA1;
`

export const DetailNav = styled.div`

    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #20AFA1;
    

`

export const DetailNavLinks = styled.p`

    font-family: 'Fredoka One', cursive;
    font-size: 12px;
    font-style: normal;
    background-color: #20AFA1;
    margin-right: 10px;
    height: 25px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: auto;
    color: white;
    `


export const RouteNav = styled.div`

    width: 100%;
    height: 40px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`


export const DetailRouteLinks = styled.p`

    font-family: 'Fredoka One', cursive;
    font-size: 12px;
    font-style: normal;
    margin-right: 10px;
    height: 25px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: auto;
    `

export const MobileTopContainer = styled.div`

    display: none;
    

@media screen and (max-width: 945px){
  width: 100%;
  height: 230px;
  background-color: khaki;
  display:flex
}

`

export const MobileTopContent = styled.div`

    display: none;
    

@media screen and (max-width: 945px){
  width: 60%;
  height: 100%;
  background-color: #20AFA1;
  display:flex ;
  flex-direction: column;
  padding: 8px;
  color: white;
}

`

export const MobileText = styled.p`

@media screen and (max-width: 945px){

    font-size: ${props => props.FontSize};
    margin: 5px 5px;
    margin-bottom: ${props => props.GiveMargin?'10px':'0'};
    font-family: ${props => props.Bold?'Fredoka One, cursive':'Open Sans, sans-serif'};
    overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
    
}

`

export const StarIcon = styled(AiFillStar)`

display: inline;
color: yellow;
font-size: 30px;
margin: 2px 5px;

`

export const TextContainer = styled.div`

    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: ${props => props.FlexDir==='row'?'center':'strecth'};
    height: auto;
    flex-direction: ${props => props.FlexDir};

`

export const PlayIcon = styled(BsFillPlayFill)`

display: inline;
color: yellow;
font-size: 30px;
margin: 2px 5px;

`


export const MobileRootContainer = styled.div`

    display: none;
    

@media screen and (max-width: 945px){
  width: 100%;
  height: auto;
  color: white;
  display:flex ;
  flex-direction: column;
 
  
}

`






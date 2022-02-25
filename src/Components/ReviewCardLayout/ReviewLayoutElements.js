import styled from "styled-components"

export const Container = styled.div`

width: 100%;
height: auto;
display: flex;
flex-direction: column;
padding-bottom: 10px;

@media screen and (max-width: 376px){

display: none;


}

`

export const MobileContainer = styled.div`

display: none;

@media screen and (max-width: 376px){

width: 100%;
height: auto;
display: flex;
flex-direction: column;
padding-bottom: 10px;


}

`

export const TopContainer = styled.div`

width: 100%;
height: 75px;
display: flex;
flex-direction: row;
border-bottom: 1px solid  #20AFA1;

`

export const TopContent = styled.div`

 width : ${props => props.FullWidth?'100%':'50%'};
 height: 100%;
 padding: 2px;
 display: flex;
 border-top: 1px solid  white;
 background-color: black;
 color: white;
 flex-direction: ${props => props.reverse?'row-reverse':`row`};



`

export const ImgHolder = styled.img`

    height: 100%;
    width: 50px;
`

export const DetailContent = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    padding: 0 8px;
    align-items: ${props => props.FlexEnd?'flex-end':'flex-start'};

    
`

export const ContentP = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-bottom: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
`
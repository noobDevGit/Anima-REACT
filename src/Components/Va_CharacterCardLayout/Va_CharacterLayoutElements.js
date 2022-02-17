import styled from "styled-components"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export const VaContent = styled.div`

width: 50%;
height: 75px;
display: flex;

@media screen and (max-width: 945px){
display: none;
}

`

export const VaContentMobile = styled.div`

width: 100%;
height: 100px;
background-color: blueviolet;
display: none;




@media screen and (max-width: 945px){

    display:  ${props => props.Show?'flex':'none'};
    flex-direction: row;
    flex-wrap: ${props => props.Wrap?'wrap':'nowrap'};
    
   
}

`

export const VaContentMobileContainer = styled.div`

width: 100%;
height: auto;
background-color: blueviolet;
display: none;
position: relative;


@media screen and (max-width: 945px){
    display: flex;
    flex-direction: column;
}

`

export const RightContent = styled.div`

 width : ${props => props.FullWidth?'100%':'50%'};
 height: 100%;
 border: 1px solid black;
 padding: 2px;
 display: flex;
 flex-direction: ${props => props.reverse?'row-reverse':`row`};

`

export const ImgHolder = styled.img`

    height: 100%;
    width: 50px;

    @media screen and (max-width: 945px){
    width: 25%;
    height: 100%;
}

`

export const DetailContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: hotpink;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    align-items: ${props => props.FlexEnd?'flex-end':'flex-start'};
`

export const ContentP = styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 12px;
margin-bottom: 4px;

`

export const ContentArrayP = styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 12px;
display: inline;

`

export const ArrowNavleft = styled(MdOutlineArrowBackIos)`

display: none;

@media screen and (max-width: 945px){

    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right:100%;
    margin: auto;
    color: white;


}
`

export const ArrowNavright = styled(MdOutlineArrowForwardIos)`

display: none;

@media screen and (max-width: 945px){

    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left:95%;
    right:0;
    margin: auto;
    color: white;


}
`
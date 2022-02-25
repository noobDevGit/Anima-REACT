import { Container,
         GenreBtn,
         TitleDiv,
         BtnContainer,
         ArrowNavright,
         NavLink } from "./AnimeGenreElements"

import { useParams } from "react-router-dom";

const AnimeGenre = () => {

    

    const Wrap = () =>{
        return(
          
        <Container>
        <TitleDiv>Genres</TitleDiv>
        <BtnContainer>
         
             
                 <GenreBtn id="1">
                     <NavLink to={'List/Action/1/1'}>
                         <ArrowNavright/> Action
                     </NavLink>
                 </GenreBtn>   
            
                  

                 <GenreBtn id="2">
                     <NavLink to={'List/Adventure/2/1'}>
                         <ArrowNavright/>  Adventure
                     </NavLink>
                 </GenreBtn>      

                 <GenreBtn id="5">
                     <NavLink to={'List/Avant_Garde/5/1'}>
                         <ArrowNavright/> Avant Garde
                     </NavLink>
                 </GenreBtn> 

                 <GenreBtn id="46">
                     <NavLink to={'List/Award_Winning/46/1'}>
                         <ArrowNavright/> Award Winning
                     </NavLink>  
                 </GenreBtn>      

                  <GenreBtn id="28">
                     <NavLink to={'List/Boys_Love/28/1'}>
                         <ArrowNavright/> Boys Love
                     </NavLink> 
                 </GenreBtn>

                 <GenreBtn id="4"> 
                     <NavLink to={'List/Comedy/4/1'}>
                         <ArrowNavright/> Comedy
                     </NavLink> 
                 </GenreBtn>   

                 <GenreBtn id="8">
                     <NavLink to={'List/Drama/8/1'}>
                         <ArrowNavright/> Drama
                     </NavLink> 
                 </GenreBtn>  

                 <GenreBtn id="10">
                     <NavLink to={'List/Fantasy/10/1'}>
                         <ArrowNavright/> Fantasy
                     </NavLink> 
                 </GenreBtn> 

                 <GenreBtn id="26">
                     <NavLink to={'List/Girls_Love/26/1'}>
                         <ArrowNavright/> Girls Love
                     </NavLink> 
                 </GenreBtn>    

                 <GenreBtn id="47">
                     <NavLink to={'List/Gourmet/47/1'}>
                         <ArrowNavright/> Gourmet
                     </NavLink> 
                 </GenreBtn>           

                 <GenreBtn id="14">
                     <NavLink to={'List/Horror/14/1'}>
                         <ArrowNavright/> Horror
                     </NavLink> 
                 </GenreBtn>       

                 <GenreBtn id="7">        
                     <NavLink to={'List/Mystery/7/1'}>
                         <ArrowNavright/> Mystery
                     </NavLink> 
                 </GenreBtn>    

                 <GenreBtn id="22">
                     <NavLink to={'List/Romance/22/1'}>
                         <ArrowNavright/> Romance
                     </NavLink> 
                 </GenreBtn>          

                 <GenreBtn id="24">
                     <NavLink to={'List/Sci-fi/24/1'}>
                         <ArrowNavright/> Sci-Fi
                     </NavLink> 
                 </GenreBtn>   

                 <GenreBtn id="36">
                     <NavLink to={'List/Slice_of_Life/36/1'}>
                         <ArrowNavright/> Slice of Life
                     </NavLink>
                 </GenreBtn>   

                 <GenreBtn id="30">
                     <NavLink to={'List/Sports/30/1'}>
                         <ArrowNavright/> Sports
                     </NavLink>
                 </GenreBtn>   


                 <GenreBtn id="37">
                     <NavLink to={'List/Supernatural/37/1'}>
                         <ArrowNavright/> Supernatural
                     </NavLink>
                 </GenreBtn>   

                 <GenreBtn id="41">
                     <NavLink to={'List/Suspense/41/1'}>
                         <ArrowNavright/> Suspense
                     </NavLink>
                 </GenreBtn>   

                 <GenreBtn id="48">
                     <NavLink to={'List/Work_Life/48/1'}>
                         <ArrowNavright/> Work Life
                     </NavLink>
                 </GenreBtn>
          
        </BtnContainer>
     </Container>

        )

    }


    return (
     Wrap()
    )
}

export default AnimeGenre


import { Container,
    TopContent,
    ImgHolder,
    DetailContent,
    ContentP,
    TopContainer,
    MobileContainer } from "./ReviewLayoutElements"

import { useState,useEffect } from 'react';

import axios from 'axios'

const ReviewCard = ({AnimeID,IsAnime}) => {


    // Anime data Container 
    const [AnimeDetail,setAnimeDetail]=useState({})

    // Loading
    const [isLoading,setIsloading]=useState(true);
  
  
    //Filled featuredAnime array with data from API
    useEffect(()=>{
  
      const getData = async () =>{
        if (IsAnime) {

        
          const result = await axios (`https://api.jikan.moe/v3/anime/${AnimeID}/reviews`)
          
          setAnimeDetail(result.data)
  
          setIsloading(false)
    
    
        }else{
  
  
        
          const result = await axios (`https://api.jikan.moe/v3/manga/${AnimeID}/reviews`)
          
          setAnimeDetail(result.data)
  
          setIsloading(false)
    
    
        }

      }
     
      
  
      getData()
  
  
    },[AnimeID])


    return isLoading?<h1>Loading...</h1>:
    

    AnimeDetail.reviews.slice(0, 4).map((content)=>(
      <>
    <Container>
     <TopContainer>
        <TopContent reverse={false} FullWidth={false}>
            <ImgHolder src={content.reviewer.image_url}/>
            <DetailContent FlexEnd = {false}>
                <ContentP>{content.reviewer.username}</ContentP>
                <ContentP>{content.helpful_count} people found this review helpful</ContentP>
            </DetailContent>
        </TopContent>
        <TopContent reverse={true} FullWidth={false}>
            <DetailContent FlexEnd = {true}>
                <ContentP>{content.date.substr(8,2)}-{content.date.substr(5,2)}-{content.date.substr(0,4)}</ContentP>
                
                {IsAnime ?
                <ContentP>{content.reviewer.episodes_seen} Episode seen</ContentP>
                :
                <ContentP>{content.reviewer.chapters_read} Chapters read</ContentP>
                }
                
                
                <ContentP>Overall Rating: {content.reviewer.scores.overall}</ContentP>
            </DetailContent>
        </TopContent>
     </TopContainer>

     <TopContent reverse={false} FullWidth={true}>
                <ContentP>{content.content}</ContentP>
        </TopContent>

    </Container>


    <MobileContainer>
      <TopContent reverse={false} FullWidth={true}>
            <ImgHolder src={content.reviewer.image_url}/>
            <DetailContent FlexEnd = {false}>
                <ContentP>{content.reviewer.username}</ContentP>
                <ContentP>Overall Rating: {content.reviewer.scores.overall}</ContentP>
            </DetailContent>
        </TopContent>
        <TopContent reverse={false} FullWidth={true}>
                <ContentP>{content.content}</ContentP>
        </TopContent>
        <TopContent reverse={false} FullWidth={true}>
        <ContentP>{content.date.substr(8,2)}-{content.date.substr(5,2)}
        -{content.date.substr(0,4)}, {content.date.substr(11,5)} | 
        Overall Rating: {content.reviewer.scores.overall} 
        </ContentP>
        
        </TopContent>

      </MobileContainer>
      

    </>


    



     ))

    
}

export default ReviewCard

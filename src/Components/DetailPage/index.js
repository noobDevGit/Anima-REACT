import { Container,
  RootContainer,
            Title,
            MainContentWrapper,
            LeftContent,
            RightContent,
            AnimePoster,
            AlternativeTitles_title,
            AlternativeTitles_Container,
            AlternativeTitles_content,
            DetailNav,
            DetailNavLinks,
            RouteNav,
            DetailRouteLinks,
            MobileTopContainer,
            MobileTopContent,
            MobileText,
            StarIcon,
            TextContainer,
            PlayIcon,
            MobileRootContainer,
            
         } from "./DetailPageElements"

import Va_Character_Staff from "../Va_CharacterCardLayout";     

import ReviewCard from "../ReviewCardLayout";

import DetailTab from "../DetailTab";         

import { useState,useEffect } from 'react';

import { useParams } from "react-router-dom";

import axios from 'axios'


const DetailPage = () => {



const params = useParams()


  // Anime Container 
  const [AnimeDetail,setAnimeDetail]=useState({})

  // Loading
  const [isLoading,setIsloading]=useState(true);



  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{

      if (params.type === 'Anime') {

        const result = await axios (`https://api.jikan.moe/v4/anime/${params.id}/full`)
        
        
        setAnimeDetail(result.data.data)
        setIsloading(false)
        
      }else{

        const result = await axios (`https://api.jikan.moe/v4/manga/${params.id}/full`)
        
        setAnimeDetail(result.data.data)
        setIsloading(false)
        

        
      }

     


    }

    

    getData()


  },[params.id])


    return isLoading ? <h1>Loading....</h1>:

 
        <RootContainer>
        <Container>
            <Title>
                {AnimeDetail.title}
            </Title>

            <MainContentWrapper>
                
                <LeftContent>
                    <AnimePoster src = {AnimeDetail.images.jpg.image_url} alt=""/>

                    <AlternativeTitles_title>
                        Alternative Titles
                    </AlternativeTitles_title>
                    <AlternativeTitles_Container BgClr={'white'}>
                        <AlternativeTitles_content>
                           Synonym: 
                            {AnimeDetail.title_synonyms.length > 0 ?
                            AnimeDetail.title_synonyms.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content}</>
                            :
                            <> {content}, </>

                            )):
                            <> - </>
                            }
                      
                        </AlternativeTitles_content>

                        <AlternativeTitles_content>
                          Japanese: {AnimeDetail.title_japanese}
                        </AlternativeTitles_content> 

                        <AlternativeTitles_content>
                          English: {AnimeDetail.title_english === null?
                          <>-</>
                          :AnimeDetail.title_english}
                        </AlternativeTitles_content>

                    </AlternativeTitles_Container>

                    <AlternativeTitles_title>
                      Information
                    </AlternativeTitles_title>
                    <AlternativeTitles_Container  BgClr={'white'}>
                       <AlternativeTitles_content>
                       Type: {AnimeDetail.type}
                      </AlternativeTitles_content>
                        
                        {params.type === 'Anime'?
                        <AlternativeTitles_content>
                         Episodes: {AnimeDetail.episodes}
                        </AlternativeTitles_content>   
                        :
                        <>
                          <AlternativeTitles_content>
                            Volumes: {AnimeDetail.volumes}
                          </AlternativeTitles_content>
                          <AlternativeTitles_content>
                            Chapters: {AnimeDetail.chapters}
                          </AlternativeTitles_content>      
                       </>
                        }

                           
                      <AlternativeTitles_content>
                       Status: {AnimeDetail.status}
                      </AlternativeTitles_content>

                      {params.type === 'Anime'?
                      <>
                      <AlternativeTitles_content>
                      Aired: {AnimeDetail.aired.string}
                      </AlternativeTitles_content>
                       <AlternativeTitles_content>
                       Premiered: {AnimeDetail.premiered}
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Broadcast: {AnimeDetail.broadcast.string}
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Producers: 
                       
                            {AnimeDetail.producers.map((content,index,arr)=>(
                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>
                            ))
                            } 
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Licensors: 
                       {AnimeDetail.licensors.length > 0 ?
                            AnimeDetail.licensors.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Studios: 
                        {AnimeDetail.studios.length > 0 ?
                            AnimeDetail.studios.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Source: {AnimeDetail.source}
                      </AlternativeTitles_content>
                      </>
                      :
                      <></>
                      }
        
                     
                      <AlternativeTitles_content>
                       Genres: 
                        {AnimeDetail.genres.length > 0 ?
                            AnimeDetail.genres.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content>
                      <AlternativeTitles_content>
                       Themes: 
                        {AnimeDetail.themes.length > 0 ?
                            AnimeDetail.themes.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content>

                        <AlternativeTitles_content>
                         Demographic: 
                         {AnimeDetail.demographics.length > 0 ?
                            AnimeDetail.demographics.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 

                        {params.type === 'Anime'?
                        <>
                          <AlternativeTitles_content>
                            Duration: {AnimeDetail.duration}
                          </AlternativeTitles_content> 
                          <AlternativeTitles_content>
                            Rating: {AnimeDetail.rating}
                          </AlternativeTitles_content> 
                        </>
                        :
                        <></>  
                      }    

                    
                      <AlternativeTitles_title>
                       Statistics
                      </AlternativeTitles_title>
                       <AlternativeTitles_Container  BgClr={'white'}>        
                        <AlternativeTitles_content>
                         Score: {AnimeDetail.score} (Scored by {AnimeDetail.scored_by} Users )
                        </AlternativeTitles_content>
                        <AlternativeTitles_content>
                         Ranked: {AnimeDetail.rank} 
                        </AlternativeTitles_content>
                        <AlternativeTitles_content>
                         Popularity: {AnimeDetail.popularity} 
                        </AlternativeTitles_content>
                        <AlternativeTitles_content>
                         Members: {AnimeDetail.members} 
                        </AlternativeTitles_content>
                        <AlternativeTitles_content>
                         Favorites: {AnimeDetail.favorites} 
                        </AlternativeTitles_content>
                      </AlternativeTitles_Container>

                      <AlternativeTitles_title>
                      External Links
                      </AlternativeTitles_title>
                       <AlternativeTitles_Container>        
                       <AlternativeTitles_content>
                         {AnimeDetail.external.length > 0 ?
                            AnimeDetail.external.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content>
                       </AlternativeTitles_Container>
 

                    </AlternativeTitles_Container>

                </LeftContent>
   {/*--------------------------------------------------------*/ }
                <RightContent>
                         <DetailNav>
                            <DetailNavLinks>Details</DetailNavLinks>
                            <DetailNavLinks>Characters & Staff</DetailNavLinks>
                            <DetailNavLinks>Episodes</DetailNavLinks>
                            <DetailNavLinks>Videos</DetailNavLinks>
                            <DetailNavLinks>Stats</DetailNavLinks>
                            <DetailNavLinks>Reviews</DetailNavLinks>
                            <DetailNavLinks>Recommendation</DetailNavLinks>
                            <DetailNavLinks>News</DetailNavLinks>
                            <DetailNavLinks>Forum</DetailNavLinks>
                            <DetailNavLinks>Clubs</DetailNavLinks>
                            <DetailNavLinks>Pictures</DetailNavLinks>
                          </DetailNav> 

                          <RouteNav>
                              <DetailRouteLinks>Top</DetailRouteLinks>
                              <DetailRouteLinks>{` > `}</DetailRouteLinks>
                              <DetailRouteLinks>{params.type}</DetailRouteLinks>
                              <DetailRouteLinks>{` > `}</DetailRouteLinks>
                              <DetailRouteLinks>TBD</DetailRouteLinks>
                          </RouteNav>
                            
                           <DetailTab AnimeId = {params.id} IsAnime = {params.type === 'Anime' ? true:false} />

                           
                </RightContent>

            </MainContentWrapper>

  {/*For Mobile  --------------------------------------------------------------------------------------------- */}
       
            <MobileTopContainer>
              <AnimePoster src = {AnimeDetail.images.jpg.image_url} alt=""/>

              <MobileTopContent>
                
                <TextContainer  FlexDir={'row'}>
                  <StarIcon/>
                  <MobileText FontSize = {'20px'} Bold={true}> {AnimeDetail.score}</MobileText>
                  <MobileText FontSize = {'12px'} Bold={false}> ({AnimeDetail.scored_by} users)</MobileText>
                </TextContainer>
        
                <MobileText FontSize = {'14px'} Bold={true} GiveMargin={true}> Ranked #{AnimeDetail.rank}</MobileText>
               
               {params.type === 'Anime'?
               
                <TextContainer  FlexDir={'column'}>
                  <MobileText FontSize = {'15px'} Bold={true}> {AnimeDetail.type} ({AnimeDetail.episodes} Eps)</MobileText>
                  <MobileText FontSize = {'13px'} Bold={false}> Aired</MobileText>
                  <MobileText FontSize = {'15px'} Bold={true}> {AnimeDetail.aired.string} </MobileText>
                  <MobileText FontSize = {'13px'} Bold={false}> Studios</MobileText>

                  {AnimeDetail.studios.map((content,index,arr)=>(

                  arr.length - 1 === index?
                  <MobileText FontSize = {'13px'} Bold={true}> {content.name} </MobileText>
                  :
                  <MobileText FontSize = {'13px'} Bold={true}> {content.name}, </MobileText>

                  )                              )}
                  
                </TextContainer>
               :
               <>
               <MobileText FontSize = {'14px'} Bold={true} GiveMargin={true}> {AnimeDetail.type} ({AnimeDetail.volumes} Vol)</MobileText>
               </>
               }
               
                <TextContainer  FlexDir={'row'}>
                  <PlayIcon/>
                  <MobileText FontSize = {'15px'} Bold={true}> More Information</MobileText>
                </TextContainer>
              </MobileTopContent>

            </MobileTopContainer>

        <MobileRootContainer> 
                        <RouteNav>
                              <DetailRouteLinks>Top</DetailRouteLinks>
                              <DetailRouteLinks>{` > `}</DetailRouteLinks>
                              <DetailRouteLinks>{params.type}</DetailRouteLinks>
                              <DetailRouteLinks>{` > `}</DetailRouteLinks>
                              <DetailRouteLinks>TBD</DetailRouteLinks>
                          </RouteNav>
                          
                          <TextContainer  FlexDir={'row'}>
                            <MobileText FontSize = {'17px'} Bold={true}> Synopsys </MobileText>
                          </TextContainer>
                          <TextContainer  FlexDir={'row'}>
                            <MobileText FontSize = {'13px'} Bold={false}> {AnimeDetail.synopsis} </MobileText>
                          </TextContainer>

                          {params.type === 'Anime' ?
                          <>
                            <TextContainer  FlexDir={'row'}>
                              <MobileText FontSize = {'17px'} Bold={true}> Characters and Voice Actors </MobileText>
                            </TextContainer>
        
                            <Va_Character_Staff IDAnim={params.id} isStaff = {false} IsAnime={true}/>
                         
                            <TextContainer  FlexDir={'row'}>
                              <MobileText FontSize = {'17px'} Bold={true}> Staff </MobileText>
                            </TextContainer>

                            <Va_Character_Staff IDAnim={params.id} isStaff = {true} IsAnime={true}/>

                            <TextContainer  FlexDir={'row'}>
                              <MobileText FontSize = {'17px'} Bold={true}> Reviews </MobileText>
                            </TextContainer>

                            <ReviewCard AnimeID={params.id} IsAnime={true}/>
                          
                          </>
                          :
                          <>
                          <TextContainer  FlexDir={'row'}>
                            <MobileText FontSize = {'17px'} Bold={true}> Background </MobileText>
                          </TextContainer>
                          <TextContainer  FlexDir={'row'}>
                            <MobileText FontSize = {'13px'} Bold={false}> {AnimeDetail.background} </MobileText>
                          </TextContainer>
                          <TextContainer  FlexDir={'row'}>
                              <MobileText FontSize = {'17px'} Bold={true}> Characters </MobileText>
                            </TextContainer>
        
                            <Va_Character_Staff IDAnim={params.id} isStaff = {false} IsAnime={false}/>

                            <TextContainer  FlexDir={'row'}>
                              <MobileText FontSize = {'17px'} Bold={true}> Reviews </MobileText>
                            </TextContainer>

                            <ReviewCard AnimeID={params.id} IsAnime={false}/>
                          </>
                        
                          }

                          

                          <TextContainer  FlexDir={'row'}>
                            <MobileText FontSize = {'17px'} Bold={true}> Information </MobileText>
                          </TextContainer>
                          <AlternativeTitles_Container BgClr={'#20AFA1'}>
                          <AlternativeTitles_content>
                           Synonym: 
                            {AnimeDetail.title_synonyms.length > 0 ?
                            AnimeDetail.title_synonyms.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content}</>
                            :
                            <> {content}, </>

                            )):
                            <> - </>
                            }
                      
                        </AlternativeTitles_content>

                        <AlternativeTitles_content>
                          Japanese: {AnimeDetail.title_japanese}
                        </AlternativeTitles_content>

                        <AlternativeTitles_content>
                          English: {AnimeDetail.title_english === null?
                          <>-</>
                          :AnimeDetail.title_english}
                        </AlternativeTitles_content>

                        <AlternativeTitles_content>
                       Type: {AnimeDetail.type}
                      </AlternativeTitles_content>

                            {params.type === 'Anime'?
                            <>
                      <AlternativeTitles_content>
                       Episodes: {AnimeDetail.episodes}
                      </AlternativeTitles_content>        
                      <AlternativeTitles_content>
                       Status: {AnimeDetail.status}
                      </AlternativeTitles_content>
                      <AlternativeTitles_content>
                       Aired: {AnimeDetail.aired.string}
                      </AlternativeTitles_content>
                      <AlternativeTitles_content>
                       Premiered: {AnimeDetail.premiered}
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Broadcast: {AnimeDetail.broadcast.string}
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Producers: 
                       
                            {AnimeDetail.producers.map((content,index,arr)=>(
                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>
                            ))
                            } 
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Licensors: 
                       {AnimeDetail.licensors.length > 0 ?
                            AnimeDetail.licensors.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Studios: 
                        {AnimeDetail.studios.length > 0 ?
                            AnimeDetail.studios.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Source: {AnimeDetail.source}
                      </AlternativeTitles_content>
                      <AlternativeTitles_content>
                       Duration: {AnimeDetail.duration}
                      </AlternativeTitles_content> 
                      <AlternativeTitles_content>
                       Rating: {AnimeDetail.rating}
                      </AlternativeTitles_content> 
                            </>
                            :  
                            <>
                             <AlternativeTitles_content>
                            Volumes: {AnimeDetail.volumes}
                          </AlternativeTitles_content>
                          <AlternativeTitles_content>
                            Chapters: {AnimeDetail.chapters}
                          </AlternativeTitles_content> 
                            </>
                          }

                     
                      
                      <AlternativeTitles_content>
                       Genres: 
                        {AnimeDetail.genres.length > 0 ?
                            AnimeDetail.genres.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content>
                      <AlternativeTitles_content>
                       Themes: 
                        {AnimeDetail.themes.length > 0 ?
                            AnimeDetail.themes.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content>

                        <AlternativeTitles_content>
                         Demographic: 
                         {AnimeDetail.demographics.length > 0 ?
                            AnimeDetail.demographics.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

                            )):
                            <> - </>
                            }
                      </AlternativeTitles_content> 
                    </AlternativeTitles_Container>

       


        </MobileRootContainer>
     
        
        
        </Container>
        </RootContainer>
    
}

export default DetailPage

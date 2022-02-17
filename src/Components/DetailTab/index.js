import { Container,
    MainScoreHeader,
    ScoreDiv,
    FlexContainer,
    FlexTop,
    FlexBottom,
    ScoreTitle,
    Score,
    UserScore,
    Rank,
    EditP,
    ContentTitleContainer,
    ContentTitlePar,
    ContentContainer,
    RelatedAnimeContent,
    Va_StaffContainer,
    ThemeContainer,
    ThemeHalfContainer,
    ThemeContent,
    PlayIcon,
    ReviewContainer
    } from "./DetailTabElements"

    import Va_Character_Staff from "../Va_CharacterCardLayout";

    import ReviewCard from "../ReviewCardLayout";

    import { useState,useEffect } from 'react';

    import axios from 'axios'


    const DetailTab = ({AnimeId}) => {

    
     // Anime data Container 
  const [AnimeDetail,setAnimeDetail]=useState({})

  // Loading
  const [isLoading,setIsloading]=useState(true);


  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{


        const result = await axios (`https://api.jikan.moe/v3/anime/${AnimeId}`)
        
        setAnimeDetail(result.data)
        setIsloading(false)

    }

    

    getData()


  },[AnimeId])


 

    return isLoading ? <h1>Loading....</h1>:
    
   
        <Container>

            <MainScoreHeader>
                <ScoreDiv>

                    <ScoreTitle>
                        SCORE
                    </ScoreTitle>
                    
                    <Score>
                        {AnimeDetail.score}
                    </Score>

                    <UserScore>
                        {AnimeDetail.scored_by} Users
                    </UserScore>
                    

                </ScoreDiv>

                <FlexContainer>
                    <FlexTop>
                        <Rank>
                            Ranked #{AnimeDetail.rank}
                        </Rank>

                        <Rank>
                            Popularity #{AnimeDetail.popularity}
                        </Rank>

                        <Rank>
                            Members #{AnimeDetail.members}
                        </Rank>
                    </FlexTop>

                    <FlexBottom>
                        <EditP>
                            {AnimeDetail.premiered}
                        </EditP>

                        <EditP>
                            {AnimeDetail.type}
                        </EditP>

                        <EditP>
                            {AnimeDetail.studios.map((content,index,arr)=>(

                            arr.length - 1 === index?
                            <> {content.name}</>
                            :
                            <> {content.name}, </>

)                              )}
                        </EditP>
                    </FlexBottom>


                </FlexContainer>
            </MainScoreHeader>

            <ContentTitleContainer>
                <ContentTitlePar>
                    Synopsis
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
            <ContentContainer>
                {AnimeDetail.synopsis}
            </ContentContainer>

            <ContentTitleContainer>
                <ContentTitlePar>
                    Background
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
            <ContentContainer>
                {AnimeDetail.background == null?
                   'No background information has been added to this title. Help improve our database by adding background information'
                   :
                   AnimeDetail.background 
                }
            </ContentContainer>



            {Object.entries(AnimeDetail.related).length === 0?
                          <></>
                           :
                           <>
                           <ContentTitleContainer>
                                <ContentTitlePar>
                                Related Anime
                                </ContentTitlePar>
                
                                <EditP>
                                Edit
                                </EditP>
                            </ContentTitleContainer>

                            {AnimeDetail.related.hasOwnProperty('Adaptation')?
                            <RelatedAnimeContent>
                                Adaptation:   
                                {AnimeDetail.related.Adaptation.map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                 ))}
                            </RelatedAnimeContent>
                            :<></>
                                }


                            {AnimeDetail.related.hasOwnProperty('Alternative setting')?
                                <RelatedAnimeContent>
                                    Alternative setting: 
                                        {AnimeDetail.related['Alternative setting'].map((content,index,arr)=>(
 
                                         arr.length - 1 === index?
                                        <> {content.name}</>
                                         :
                                        <> {content.name}, </>
                                        ))}
                                </RelatedAnimeContent>
                                    :
                                    <></>
                             }        


                        {AnimeDetail.related.hasOwnProperty('Sequel')?
                            <RelatedAnimeContent>
                                Sequel:
                                {AnimeDetail.related.Sequel.map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                ))} 
                            </RelatedAnimeContent>
                            :
                            <></>
                            }

                        {AnimeDetail.related.hasOwnProperty('Other')?
                            <RelatedAnimeContent>
                                Other:
                                {AnimeDetail.related.Other.map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                ))} 
                            </RelatedAnimeContent>
                            :
                            <></>
                            }

                            {AnimeDetail.related.hasOwnProperty('Alternative version')?
                            <RelatedAnimeContent>
                                Alternative version:
                                {AnimeDetail.related['Alternative version'].map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                ))} 
                            </RelatedAnimeContent>
                            :
                            <></>
                            }


                            {AnimeDetail.related.hasOwnProperty('Side story')?
                            <RelatedAnimeContent>
                                Side story:
                                {AnimeDetail.related['Side story'].map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                ))} 
                            </RelatedAnimeContent>
                            :
                            <></>
                            } 


                            {AnimeDetail.related.hasOwnProperty('Spin-off')?
                            <RelatedAnimeContent>
                                Spin-Off:
                                {AnimeDetail.related['Spin-off'].map((content,index,arr)=>(

                                arr.length - 1 === index?
                                <> {content.name}</>
                                :
                                <> {content.name}, </>
                                ))} 
                            </RelatedAnimeContent>
                            :
                            <></>
                            }         
                              
                            
                            </>}
                      
            <ContentTitleContainer>
                <ContentTitlePar>
                    Characters & Voice Actors
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
           <Va_StaffContainer Height={'375px'}>
                       <Va_Character_Staff IDAnim={AnimeId} isStaff = {false}/>
           </Va_StaffContainer>
            

           <ContentTitleContainer>
                <ContentTitlePar>
                    Staff
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
           <Va_StaffContainer Height={'150px'}>
                       <Va_Character_Staff IDAnim={AnimeId} isStaff = {true}/>
           </Va_StaffContainer>

           <ThemeContainer>
                            <ThemeHalfContainer>
                                <ThemeContent isTitle = {true} Height = {'30px'}>
                                    Opening Theme
                                 </ThemeContent>

                                 {AnimeDetail.opening_themes.map((content)=>(
                                    <ThemeContent isTitle = {false} Height = {'40px'}>
                                     <PlayIcon /> {content}
                                    </ThemeContent>
                                 ))}     
                            </ThemeHalfContainer>

                            <ThemeHalfContainer>
                                <ThemeContent isTitle = {true} Height = {'30px'}>
                                Ending Theme
                                </ThemeContent>
                                {AnimeDetail.ending_themes.map((content)=>(
                                    <ThemeContent isTitle = {false} Height = {'40px'}>
                                     <PlayIcon /> {content}
                                    </ThemeContent>
                                 ))} 
                            </ThemeHalfContainer>

           </ThemeContainer>

           <ContentTitleContainer>
                <ContentTitlePar>
                    Review
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
           <ReviewContainer>
                      <ReviewCard AnimeID={AnimeId}/>              
           </ReviewContainer>

        </Container>
    
}

export default DetailTab

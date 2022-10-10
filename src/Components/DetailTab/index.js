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


    const DetailTab = ({AnimeId, IsAnime}) => {

    
     // Anime data Container 
  const [AnimeDetail,setAnimeDetail]=useState({})

  // Loading
  const [isLoading,setIsloading]=useState(true);


  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{

        if (IsAnime) {

        const result = await axios (`https://api.jikan.moe/v4/anime/${AnimeId}/full`)
        
        setAnimeDetail(result.data.data)
        setIsloading(false)
            
        }else{

            const result = await axios (`https://api.jikan.moe/v4/manga/${AnimeId}/full`)
            
            setAnimeDetail(result.data.data)
            setIsloading(false)
            
        }
        

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
                            {IsAnime?
                                AnimeDetail.premiered
                                :
                                AnimeDetail.type
                            }      
                        </EditP>

                        <EditP>
                            
                            {IsAnime?
                                AnimeDetail.type
                                :
                                AnimeDetail.serializations.map((content,index,arr)=>(

                                    arr.length - 1 === index?
                                    <> {content.name}</>
                                    :
                                    <> {content.name}, </>
        
                                ))
                             }      
                        </EditP>

                        <EditP>

                             {IsAnime ?

                                AnimeDetail.studios.map((content,index,arr)=>(

                                    arr.length - 1 === index?
                                    <> {content.name}</>
                                    :
                                    <> {content.name}, </>

                                ))
                                :
                                AnimeDetail.authors.map((content,index,arr)=>(

                                    arr.length - 1 === index?
                                    <> {content.name}</>
                                    :
                                    <> {content.name}, </>

                                ))

                             
                            }

                         
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



            {Object.entries(AnimeDetail.relations).length === 0?
                          <></>
                           :
                           <>
                           <ContentTitleContainer>
                                <ContentTitlePar>
                                {IsAnime?'Related Anime':'Related Manga'}
                                </ContentTitlePar>
                
                                <EditP>
                                Edit
                                </EditP>
                            </ContentTitleContainer>


                            {AnimeDetail.relations.map((content,index,arr)=>
                              
                              {
                               let returnRow;

                                switch (content.relation) {
                                    case 'Adaptation':
                                    returnRow =  <RelatedAnimeContent>
                                                    Adaptation:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Alternative setting':
                                    returnRow =  <RelatedAnimeContent>
                                                    Alternative setting:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Sequel':
                                    returnRow =  <RelatedAnimeContent>
                                                    Sequel:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Other':
                                    returnRow =  <RelatedAnimeContent>
                                                    Other:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Alternative version':
                                    returnRow =  <RelatedAnimeContent>
                                                    Alternative version:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Side story':
                                    returnRow =  <RelatedAnimeContent>
                                                    Side story:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                        break;
                                    case 'Spin-off':
                                    returnRow =  <RelatedAnimeContent>
                                                    Spin-off:   
                                                    {content.entry.map((content,index,arr)=>(
                
                                                    arr.length - 1 === index?
                                                    <> {content.name}</>
                                                    :
                                                    <> {content.name}, </>
                                                    ))}
                                                </RelatedAnimeContent>
                                            break;
                                    default:
                                        <></>
                                        break;
                                }

                                return returnRow

                            }
                                    
                            )}
                            
                            </>}
                            
                      
            <ContentTitleContainer>
                <ContentTitlePar>
                  {IsAnime?'Characters & Voice Actors':'Characters'}  
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
           <Va_StaffContainer Height={'375px'}>
                       <Va_Character_Staff IDAnim={AnimeId} isStaff = {false} IsAnime={IsAnime}/>
           </Va_StaffContainer>
            

            {IsAnime?
            <>
            <ContentTitleContainer>
                <ContentTitlePar>
                    Staff
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
            <Va_StaffContainer Height={'150px'}>
                <Va_Character_Staff IDAnim={AnimeId} isStaff = {true} IsAnime={IsAnime}/>
            </Va_StaffContainer>
            </>
            :
            <></>
            }
           
            {IsAnime?
                <ThemeContainer>
                <ThemeHalfContainer>
                    <ThemeContent isTitle = {true} Height = {'30px'}>
                        Opening Theme
                     </ThemeContent>

                     {AnimeDetail.theme.openings.map((content)=>(
                        <ThemeContent isTitle = {false} Height = {'40px'}>
                         <PlayIcon /> {content}
                        </ThemeContent>
                     ))}     
                </ThemeHalfContainer>

                <ThemeHalfContainer>
                    <ThemeContent isTitle = {true} Height = {'30px'}>
                    Ending Theme
                    </ThemeContent>
                    {AnimeDetail.theme.endings.map((content)=>(
                        <ThemeContent isTitle = {false} Height = {'40px'}>
                         <PlayIcon /> {content}
                        </ThemeContent>
                     ))} 
                </ThemeHalfContainer>
            </ThemeContainer>
            :
            <></>
            }
           

           <ContentTitleContainer>
                <ContentTitlePar>
                    Review
                </ContentTitlePar>
                
                <EditP>
                    Edit
                </EditP>
            </ContentTitleContainer>
           <ReviewContainer>
                      <ReviewCard AnimeID={AnimeId} IsAnime={IsAnime}/>              
           </ReviewContainer>

        </Container>
    
}

export default DetailTab

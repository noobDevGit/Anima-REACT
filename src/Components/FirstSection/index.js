import { FirstSectionContainer, 
    FeaturedAnimeSection,
    FeaturedAnimeContainer,
    FeaturedTitle,
    ImageContainer,
    DetailContainer,
    AnimePoster,
    AnimeTitle,
    AnimeYear,
    DurationNGenre,
    StarnRating,
    StarIcon,
    AnimeScore,
    BtnDetailContainer,
    BtnDetail,
    Synopsis
    
 } from "./FirstSectionElements"

 import { Link } from "react-router-dom";

 


const FirstSection = ({FeaturedAnime, Loading, isAnime, isLightBg})=> {



console.log(FeaturedAnime);


return Loading ? <h1>Loading....</h1>:

        <FirstSectionContainer Background = {isLightBg?"#ffffff":"#000"} >
            <FeaturedAnimeContainer>

            {isAnime?
            <FeaturedTitle textColor ={isLightBg?"#000":"#20AFA1"} >Trending Anime this season</FeaturedTitle>
            :
            <FeaturedTitle textColor ={isLightBg?"#000":"#20AFA1"}>Featured Manga</FeaturedTitle>
            }
            

            <FeaturedAnimeSection>

                <ImageContainer>
                    <AnimePoster src = {FeaturedAnime.data.images.jpg.image_url} alt="" />
                </ImageContainer>
                
                <DetailContainer>
                    <AnimeTitle textColor ={isLightBg?"#000":"#20AFA1"}>{FeaturedAnime.data.titles.map((task,index,arr)=>
                      index == 0?  
                        task.title
                        :
                        <></>
                    )}</AnimeTitle>

                    {isAnime?
                    <AnimeYear textColor ={isLightBg?"#000":"#20AFA1"}>Premiered : {FeaturedAnime.data.season} {FeaturedAnime.data.year} </AnimeYear>
                    :
                    <AnimeYear textColor ={isLightBg?"#000":"#20AFA1"}>Published : {FeaturedAnime.data.published.string} </AnimeYear>}
                    
                    {isAnime?
                    <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}>{FeaturedAnime.data.duration} | 

                     {FeaturedAnime.data.genres.map((task,index,arr)=>(

                    arr.length - 1 === index?
                    <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}> {task.name} </DurationNGenre>
                    :
                    <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}> {task.name}, </DurationNGenre>
                    ))
                    } </DurationNGenre>
                    
                    :
                    <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}>Volumes: {FeaturedAnime.data.volumes} | 
                      {FeaturedAnime.data.genres.map((task,index,arr)=>(

                        arr.length - 1 === index?
                        <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}> {task.name} </DurationNGenre>
                        :
                        <DurationNGenre textColor ={isLightBg?"#000":"#20AFA1"}> {task.name}, </DurationNGenre>
                        ))
                        }
                        
                        </DurationNGenre> }

                    
                    <StarnRating>
                        <StarIcon/>
                        <AnimeScore textColor ={isLightBg?"#000":"#20AFA1"}>{FeaturedAnime.data.score} </AnimeScore>
                    </StarnRating>

                   
                    <Synopsis textColor ={isLightBg?"#000":"#20AFA1"}> {FeaturedAnime.data.synopsis} </Synopsis>
        
                    
                    <BtnDetailContainer>
                        <BtnDetail isLightBg = {isLightBg}>
                            <Link to={isAnime?`DetailPage/Anime/${FeaturedAnime.data.mal_id}`:`DetailPage/Manga/${FeaturedAnime.data.mal_id}`}>View Detail</Link></BtnDetail>
                    </BtnDetailContainer>

                </DetailContainer>

            </FeaturedAnimeSection>

            </FeaturedAnimeContainer>
        </FirstSectionContainer>
    
}

export default FirstSection
    
                    
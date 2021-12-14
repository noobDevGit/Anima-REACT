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
    AnimeScore
 } from "./FirstSectionElements"
import Header from "../Header"


const FirstSection = ({FeaturedAnime})=> {

 


    return (
        <FirstSectionContainer >
            <FeaturedAnimeContainer>

            <FeaturedTitle>Trending this season</FeaturedTitle>

            <FeaturedAnimeSection>

                <ImageContainer>
                    <AnimePoster src = {FeaturedAnime.image_url} alt="" />
                </ImageContainer>
                
                <DetailContainer>
                    <AnimeTitle>{FeaturedAnime.title}</AnimeTitle>
                    <AnimeYear>Premiered : {FeaturedAnime.premiered} </AnimeYear>
                    <DurationNGenre>{FeaturedAnime.duration} |</DurationNGenre>
                    {FeaturedAnime.genres.map(genre => (
                           <DurationNGenre > {genre.name}, </DurationNGenre>
                    ))}

                    <StarnRating>
                        <StarIcon/>
                        <AnimeScore>{FeaturedAnime.score} </AnimeScore>
                    </StarnRating>

                </DetailContainer>

            </FeaturedAnimeSection>

            </FeaturedAnimeContainer>
        </FirstSectionContainer>
    )
}

export default FirstSection
    
                    {/* {FeaturedAnime.producers.map(item => (
                           <AnimeYear key={item.mal_id}>{item.type}</AnimeYear>
                    ))} */}
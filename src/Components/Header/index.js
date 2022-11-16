import { Nav,
        Logo,
        Ul,
        Li,
    SearchBar,
    CustomInput,
    PhoneMenuContainer,
    Menu,
    MenuSearch,
    NewLi,
    SearchResultContainer,
    WarningText,
    SearchDetailCard,
    ImgHolder,
    SearchCardLeftDetail,
    MainText,
    TextWrapperDiv,
    ImgContainer,
    SearchCardContainer,
    TypeP} from "./HeaderElements"
import logo  from "../../logo/logo.png"

import axios from 'axios'

import { useState,useRef, useEffect } from 'react';



export const Header = ({ToggleFunc,ToggleSearchBar,SendSearchIsOpen,MobileQuery}) => {


    const myContainer = useRef(null);

    const [InputLength,SetInputLength]= useState(0)

    // Anime data Container 
    const [AnimeDetail,setAnimeDetail]=useState({})

    // Manga data Container 
    const [MangaDetail,setMangaDetail]=useState({})

    const [isLoading,setIsloading]=useState(true);

    const [searchQuery,setSearchQuery]=useState('');



//Filled featuredAnime array with data from API
useEffect(()=>{

   

      setTimeout(function(){ 

            
        const fetch = async ()=>{
                
            const result = await axios (`https://api.jikan.moe/v4/anime?q=${MobileQuery}&page=1&limit=5`)
    
            const Mangaresult = await axios (`https://api.jikan.moe/v4/manga?q=${MobileQuery}&page=1&limit=5`)
      
            setAnimeDetail(result.data.data)
    
            setMangaDetail(Mangaresult.data.data)
    
            setIsloading(false)
      
          }

          fetch()
   
}
   , 2000);
  },[MobileQuery])

    const Test =(value)=>{

        if (value.length > 0 && value.length < 3) {


            SetInputLength(value.length)
            setSearchQuery('')
          
            
        }else {

            SetInputLength(value.length)
            let newstuff = encodeURI(value)
         




            setTimeout(function(){ 

                setSearchQuery(newstuff)
                
               }, 1000);




           


              setTimeout(function(){ 

            
                    const fetch = async ()=>{
        
                        const result = await axios (`https://api.jikan.moe/v4/anime?q=${searchQuery}&page=1&limit=5`)
          
                        const Mangaresult = await axios (`https://api.jikan.moe/v4/manga?q=${searchQuery}&page=1&limit=5`)
                  
                        setAnimeDetail(result.data.data)
          
                        setMangaDetail(Mangaresult.data.data)
          
                        setIsloading(false)
                    }
                  
                      
                  
                      fetch()
        
                    
                

               
            }
               , 1000);
            

        } 
    }


        // useEffect(()=>{

        //     const fetch = async ()=>{
        
        //       const result = await axios (`https://api.jikan.moe/v4/anime?q=${searchQuery}&page=1&limit=5`)

        //       const Mangaresult = await axios (`https://api.jikan.moe/v4/manga?q=${searchQuery}&page=1&limit=5`)
        
        //       setAnimeDetail(result.data.data)

        //       setMangaDetail(Mangaresult.data.data)

        //       setIsloading(false)
        
        //     }
        
        //     fetch()
        
        
        //   },[searchQuery])

        //   useEffect(()=>{

        //     if (MobileQuery.length >= 3) {

        //         const fetch = async ()=>{
        
        //             const result = await axios (`https://api.jikan.moe/v4/anime?q=${MobileQuery}&page=1&limit=5`)

        //             const Mangaresult = await axios (`https://api.jikan.moe/v4/manga?q=${MobileQuery}&page=1&limit=5`)
              
        //             setAnimeDetail(result.data.data)

        //             setMangaDetail(Mangaresult.data.data)
      
        //             setIsloading(false)
              
        //           }
              
        //           fetch()
                
        //     }

         
        
        
        //   },[MobileQuery])


     


    //   const FormatDate = (DatePar) =>{

    //     const year = parseInt(DatePar.substring(0,4))

    //     const month = parseInt(DatePar.substring(5,7))

    //     const day = parseInt(DatePar.substring(8,10))

    //     let formatMonth='';

    //     switch (month) {
    //         case 1:
    //           formatMonth = "Jan";
    //           break;
    //         case 2:
    //           formatMonth = "Feb";
    //           break;
    //         case 3:
    //           formatMonth = "Mar";
    //           break;
    //         case 4:
    //           formatMonth = "Apr";
    //           break;
    //         case 5:
    //             formatMonth = "May";
    //             break;
    //         case 6:
    //             formatMonth = "jun";
    //             break;  
    //         case 7:
    //             formatMonth = "Jul";
    //             break;
    //         case 8:
    //             formatMonth = "Aug";
    //             break;
    //         case 9:
    //             formatMonth = "Sep";
    //             break;
    //         case 10:
    //             formatMonth = "Oct";
    //             break;
    //         case 11:
    //             formatMonth = "Nov";
    //             break;
    //         case 12:
    //             formatMonth = "Dec";
    //             break;
    //       }


    //     return (day +' '+formatMonth+', '+year)


    //   }



    //   const ProccessDate = (rawDateFrom, rawDateTo) =>{

    //     if (rawDateFrom !== null && rawDateTo !== null) {
            
    //             return (FormatDate(rawDateFrom)+' to '+FormatDate(rawDateTo))

    //     }else if (rawDateFrom !== null && rawDateTo === null) {
            
    //             return (FormatDate(rawDateFrom)+' to ?')
    //     }else{


    //             return ('Not available')
    //     }
      

    //   }


    //   const ProccessStatus=(FromDate,toDate)=>{
    //     var today = new Date();

    //     if (FromDate !== null && toDate ===null) {

    //         var Fromdate = new Date(FromDate);

    //         if (Fromdate <= today) {

    //             return 'Currently Airing'
                
    //         }else{

    //             return 'Not yet Aired'
    //         }
            
    //     }else if(FromDate !== null && toDate !==null){

    //         return 'Finished Airing'

    //     }else{

    //         return 'Not yet Aired'

    //     }
        

       


    //   }

      const test = ()=>{
        ToggleFunc(true)
      }

      const OpenSearch =()=>{

        ToggleSearchBar(!SendSearchIsOpen)

      }

      const DefaultValue = ()=>{
       
        SetInputLength('')
        myContainer.current.value('')

      }

      const SearchCard = (type,content) =>{

        return(
        <NewLi to={`/DetailPage/${type}/${content.mal_id}` }
                onClick={DefaultValue}>    
            <SearchDetailCard>
                    <ImgContainer>
                        <ImgHolder src = {content.images.jpg.image_url} alt=""/>
                    </ImgContainer>

                <SearchCardLeftDetail>

                    <TextWrapperDiv>
                        <MainText isTitle={true}>{content.title}</MainText>
                        &nbsp;
                        <MainText isTitle={false}>({content.type})</MainText>
                    </TextWrapperDiv>

                        {type === 'Anime' ?
                        <TextWrapperDiv>
                            <MainText isTitle={false}>Aired :{(content.aired.string) } </MainText>
                        </TextWrapperDiv>
                            :
                        <TextWrapperDiv>
                            <MainText isTitle={false}>Published :{(content.start_date) } </MainText>
                        </TextWrapperDiv>
                    
                        }
                       

                        <TextWrapperDiv>
                            <MainText isTitle={false}>Score : {content.score === 0?'N/A':content.score}</MainText>
                        </TextWrapperDiv>

                        <TextWrapperDiv>
                            <MainText isTitle={false}>Status : {(content.status)}</MainText>
                        </TextWrapperDiv>
                </SearchCardLeftDetail>
            </SearchDetailCard>
        </NewLi>
        )
      }


    return (
            <Nav>
                <SearchResultContainer Display={InputLength} MobileDisplay={MobileQuery}> 

                {MobileQuery.length<3? 
                <WarningText Display={InputLength} >Input must be the Minimum of 3 letters to search</WarningText>
                :
                <WarningText Display={MobileQuery.length} >Input must be the Minimum of 3 letters to search</WarningText>
                }
                   
                {MobileQuery.length < 3 ?
                    <SearchCardContainer Display={InputLength} >
                    <TypeP>Anime</TypeP>
                    {isLoading?<h1>Loading...</h1>:
                   

                    AnimeDetail.map((content)=>(

                        SearchCard('Anime',content)

       
                    ))
                }
                    <TypeP>Manga</TypeP>
                    {isLoading?<h1>Loading...</h1>:
                   
                   MangaDetail.map((content)=>(
                         SearchCard('Manga',content)
                    ))
                }


                    </SearchCardContainer>

:

                <SearchCardContainer Display={MobileQuery.length} >
                   <TypeP>Anime</TypeP>
                    {isLoading?<h1>Loading...</h1>:
                   
                    AnimeDetail.map((content)=>(

                        SearchCard('Anime',content)

       
                    ))
                }
                    <TypeP>Manga</TypeP>
                    {isLoading?<h1>Loading...</h1>:
                   
                   MangaDetail.map((content)=>(
                         SearchCard('Manga',content)
                    ))
                }
</SearchCardContainer>

                        
                    }

                   
                    
                </SearchResultContainer>

                <NewLi to={'/'}><Logo src={logo}  /></NewLi>
                <Ul>
                    <Li><NewLi to={'Genre/Anime'}>Anime</NewLi></Li>
                    <Li><NewLi to={'Genre/Manga'}>Manga</NewLi></Li>
                </Ul>
               <SearchBar>
                   <CustomInput ref={myContainer} type='text' placeholder='Search'  onChange = {(e)=>Test(e.target.value)}/>
               </SearchBar>
               <PhoneMenuContainer>
                   <MenuSearch onClick={OpenSearch}/>
                    <Menu onClick={test}/>
               </PhoneMenuContainer>
            </Nav>
    )
}

export default Header

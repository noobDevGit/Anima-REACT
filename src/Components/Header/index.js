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
    SearchCardContainer} from "./HeaderElements"
import logo  from "../../logo/logo.png"

import axios from 'axios'

import { useState,useEffect } from 'react';


export const Header = ({ToggleFunc}) => {

    const [InputLength,SetInputLength]= useState(0)

    // Anime data Container 
    const [AnimeDetail,setAnimeDetail]=useState({})

    const [isLoading,setIsloading]=useState(true);

    const [searchQuery,setSearchQuery]=useState('');

    const Test =(value)=>{

        if (value.length > 0 && value.length < 3) {


            SetInputLength(value.length)
            setSearchQuery('')
          
            
        }else {

            SetInputLength(value.length)
            let newstuff = encodeURI(value)
            setSearchQuery(newstuff)
            

        } 
    }


        useEffect(()=>{

            const fetch = async ()=>{
        
              const result = await axios (`https://api.jikan.moe/v3/search/anime?q=${searchQuery}&page=1&limit=5`)
        
              setAnimeDetail(result.data)

              setIsloading(false)
        
            }
        
            fetch()
        
        
          },[searchQuery])


     


      const FormatDate = (DatePar) =>{

        const year = parseInt(DatePar.substring(0,4))

        const month = parseInt(DatePar.substring(5,7))

        const day = parseInt(DatePar.substring(8,10))

        let formatMonth='';

        switch (month) {
            case 1:
              formatMonth = "Jan";
              break;
            case 2:
              formatMonth = "Feb";
              break;
            case 3:
              formatMonth = "Mar";
              break;
            case 4:
              formatMonth = "Apr";
              break;
            case 5:
                formatMonth = "May";
                break;
            case 6:
                formatMonth = "jun";
                break;  
            case 7:
                formatMonth = "Jul";
                break;
            case 8:
                formatMonth = "Aug";
                break;
            case 9:
                formatMonth = "Sep";
                break;
            case 10:
                formatMonth = "Oct";
                break;
            case 11:
                formatMonth = "Nov";
                break;
            case 12:
                formatMonth = "Dec";
                break;
          }


        return (day +' '+formatMonth+', '+year)


      }



      const ProccessDate = (rawDateFrom, rawDateTo) =>{

        if (rawDateFrom !== null && rawDateTo !== null) {
            
                return (FormatDate(rawDateFrom)+' to '+FormatDate(rawDateTo))

        }else if (rawDateFrom !== null && rawDateTo === null) {
            
                return (FormatDate(rawDateFrom)+' to ?')
        }else{


                return ('Not available')
        }
      

      }


      const ProccessStatus=(FromDate,toDate)=>{
        var today = new Date();

        if (FromDate !== null && toDate ===null) {

            var Fromdate = new Date(FromDate);

            if (Fromdate <= today) {

                return 'Currently Airing'
                
            }else{

                return 'Not yet Aired'
            }
            
        }else if(FromDate !== null && toDate !==null){

            return 'Finished Airing'

        }else{

            return 'Not yet Aired'

        }
        

       


      }

      const test = ()=>{
        ToggleFunc(true)
      }



    return (
            <Nav>
                <SearchResultContainer Display={InputLength}> 
                    <WarningText Display={InputLength}>Input must be the Minimum of 3 letters to search</WarningText>
                    
                    <SearchCardContainer Display={InputLength}>
                    {isLoading?<h1>Loading...</h1>:
                         AnimeDetail.results.map((content)=>(

                    <NewLi to={`/DetailPage/${content.mal_id}` }
                            onClick={()=>SetInputLength('')}>    
                        <SearchDetailCard>
                            <ImgContainer>
                                <ImgHolder src = {content.image_url} alt=""/>
                            </ImgContainer>
    
                            <SearchCardLeftDetail>
                                
                                <TextWrapperDiv>
                                    <MainText isTitle={true}>{content.title}</MainText>
                                    &nbsp;
                                    <MainText isTitle={false}>({content.type})</MainText>
                                </TextWrapperDiv>
                               
                                <TextWrapperDiv>
                                    <MainText isTitle={false}>Aired :{ProccessDate(content.start_date,content.end_date) } </MainText>
                                </TextWrapperDiv>
    
                                <TextWrapperDiv>
                                    <MainText isTitle={false}>Score : {content.score === 0?'N/A':content.score}</MainText>
                                </TextWrapperDiv>
    
                                <TextWrapperDiv>
                                    <MainText isTitle={false}>Status : {ProccessStatus(content.start_date,content.end_date)}</MainText>
                                </TextWrapperDiv>
    
                               
                                
    
                            </SearchCardLeftDetail>
    
                        </SearchDetailCard>
                        </NewLi>
                        ))
                    }

                    </SearchCardContainer>
                    
                </SearchResultContainer>

                <NewLi to={'/'}><Logo src={logo}  /></NewLi>
                <Ul>
                    <Li><NewLi to={'Genre/'}>Anime</NewLi></Li>
                    <Li>Manga</Li>
                </Ul>
               <SearchBar>
                   <CustomInput type='text' placeholder='Search'  onChange = {(e)=>Test(e.target.value)}/>
               </SearchBar>
               <PhoneMenuContainer>
                   <MenuSearch/>
                    <Menu onClick={test}/>
               </PhoneMenuContainer>
            </Nav>
    )
}

export default Header

import { VaContent,
        RightContent,
        ImgHolder,
        DetailContent,
        ContentP,
        ContentArrayP,
        VaContentMobile,
        VaContentMobileContainer,
        ArrowNavleft,
        ArrowNavright
        } from "./Va_CharacterLayoutElements"

        import { useState,useEffect } from 'react';

        import axios from 'axios'

const Va_Character_Staff = ({IDAnim, isStaff,IsAnime}) => {




    // Anime data Container 
    const [AnimeDetail,setAnimeDetail]=useState({})

    // Loading
    const [isLoading,setIsloading]=useState(true);


    //Staff Array
    const [StaffArray, setStaffArray] = useState([])
  
    //Character counter
    const [CounterChar, setCounterChar] = useState(0)

       //Character counter
    const [CounterStaff, setCounterStaff] = useState(0)
  
  //Rerun useeffect
  const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);

  
    //Filled featuredAnime array with data from API
    useEffect(()=>{
  
      const getData = async () =>{
  
        if (IsAnime) {

          

          setTimeout(function(){ 
            
          axios.get(`https://api.jikan.moe/v4/anime/${IDAnim}/characters`)
                .then((resp)=>{
                        setAnimeDetail(resp.data.data)
                     
                        setTimeout(function(){ 
  
                          axios.get(`https://api.jikan.moe/v4/anime/${IDAnim}/staff`)
                          .then((resp)=>{
                                  setStaffArray(resp.data.data)
                                
                                  setIsloading(false)
                                })
  
                        }, 2000);
                        
                      })

           }, 2000);

          

           
           
            // axios
            //     .get(`https://api.jikan.moe/v4/anime/${IDAnim}/characters`)
            //     .then((resp)=>{
            //       setAnimeDetail(resp.data.data)
            //       const StaffResult = axios (`https://api.jikan.moe/v4/anime/${IDAnim}/staff`)
          
            //       setStaffArray(StaffResult.data.data)
            //       setIsloading(false)

            //     })
            //     .catch((err)=>{

            //     })
            

          
        }else{

          const result = await axios (`https://api.jikan.moe/v4/manga/${IDAnim}/characters`)
         
          setAnimeDetail(result.data.data)
          
  
          setIsloading(false);


        }
  
       
        
  
      }
  
      
  
      getData()
  
  
    },[])


    

    const NavFunction =  (left, staff) =>{


      if (staff) {
        
        if(left){

          if (CounterStaff === 0) {
            
            setCounterStaff(StaffArray.length-1)
      
          } else {
      
            setCounterStaff(CounterStaff-1)
      
          }
      
        }else{
      
          if (CounterStaff === StaffArray.length-1) {
      
            setCounterStaff(0)
      
          } else {
      
            setCounterStaff(CounterStaff+1)
      
          }      
      
        }     
      
      } else {
        
        if(left){

          if (CounterChar === 0) {
            
            setCounterChar(AnimeDetail.length-1)
      
          } else {
      
            setCounterChar(CounterChar-1)
      
          }
      
        }else{
      
          if (CounterChar === AnimeDetail.length-1) {
      
            setCounterChar(0)
      
          } else {
      
            setCounterChar(CounterChar+1)
      
          }      
      
        }     
      
      
      }
     
    }
  
  


    return isLoading ? <h1>Loading....</h1>:
<>
{IsAnime? 
  isStaff ?
  StaffArray.slice(0, 4).map((content)=>(
    <VaContent>
        <RightContent reverse={false} FullWidth={true}>
          <ImgHolder src = {content.person.images.jpg.image_url} alt=""/>
          <DetailContent FlexEnd = {false} > 
            <ContentP>{content.person.name}</ContentP>
            <ContentArrayP> 
            {content.positions.map((content,index,arr)=>
               arr.length - 1 === index?
               <>{content}</> 
               :
               <>{content}, </>
            )}
            </ContentArrayP>
          </DetailContent >
        </RightContent>
    </VaContent>
   ))   
  
 
   :
    AnimeDetail.slice(0, 10).map((content, index)=>(
    <VaContent >
        <RightContent reverse={false} FullWidth={false}>
          <ImgHolder src = {content.character.images.jpg.image_url} alt=""/>
          <DetailContent FlexEnd = {false} > 
           <ContentP>{content.character.name}</ContentP> 
           <ContentP>{content.role}</ContentP>  
          </DetailContent >
        </RightContent>
   

    {content.voice_actors.filter(result => result.language === 'Japanese').slice(0,1).map(newArr => (
    <RightContent reverse={true}>   
        <ImgHolder src = {newArr.person.images.jpg.image_url} alt=""/>
        <DetailContent FlexEnd = {true}> 
            <ContentP>{newArr.person.name}</ContentP> 
            <ContentP>{newArr.language}</ContentP>  
        </DetailContent >
    </RightContent>  
    ))}

  </VaContent>

   ))
   :
   AnimeDetail.slice(0, 10).map((content, index)=>(
    <VaContent >
        <RightContent reverse={false} FullWidth={true}>
          <ImgHolder src = {content.character.images.jpg.image_url} alt=""/>
          <DetailContent FlexEnd = {false} > 
           <ContentP>{content.character.name}</ContentP> 
           <ContentP>{content.role}</ContentP>  
          </DetailContent >
        </RightContent>

  </VaContent>
   ))
  
   }


    {IsAnime?
      isStaff ?
      <VaContentMobileContainer>
      <ArrowNavleft onClick={() => NavFunction(true,true)}/>
      <ArrowNavright onClick={() => NavFunction(false,true)}/>
         
      <VaContentMobile Show={true}>     
              <RightContent reverse={false} FullWidth={true} >
                <ImgHolder src = {StaffArray[CounterStaff].person.images.jpg.image_url} alt=""/>
                <DetailContent FlexEnd = {false} > 
                <ContentP>{StaffArray[CounterStaff].person.name}</ContentP>
                  <ContentArrayP> 
                  {StaffArray[CounterStaff].positions.map((content,index,arr)=>
                     arr.length - 1 === index?
                     <>{content}</> 
                     :
                     <>{content}, </>
                  )}
                  </ContentArrayP>
                </DetailContent >
              </RightContent>
      </VaContentMobile>
    
    </VaContentMobileContainer>
   
      :
    <VaContentMobileContainer>
      <ArrowNavleft onClick={() => NavFunction(true,false)}/>
      <ArrowNavright onClick={() => NavFunction(false,false)}/>
         
      <VaContentMobile Show={true}>    
            
              <RightContent reverse={false} FullWidth={true} >
                <ImgHolder src = {AnimeDetail[CounterChar].character.images.jpg.image_url} alt=""/>
                <DetailContent FlexEnd = {false} > 
                 <ContentP>{AnimeDetail[CounterChar].character.name}</ContentP> 
                 <ContentP>{AnimeDetail[CounterChar].role}</ContentP>  
                </DetailContent >
              </RightContent>
         
         
            {AnimeDetail[CounterChar].voice_actors.filter(result => result.language === 'Japanese').slice(0,1).map(newArr => (
              <RightContent reverse={true} FullWidth={true}>   
                  <ImgHolder src = {newArr.person.images.jpg.image_url} alt=""/>
                  <DetailContent FlexEnd = {true}> 
                      <ContentP>{newArr.person.name}</ContentP> 
                      <ContentP>{newArr.language}</ContentP>  
                  </DetailContent >
              </RightContent>  
              ))}
         
      </VaContentMobile>
    
    </VaContentMobileContainer>
    
   
    :
    AnimeDetail.length==0?

    <>No characters data found</>
    :
    <VaContentMobileContainer>
      <ArrowNavleft onClick={() => NavFunction(true,false)}/>
      <ArrowNavright onClick={() => NavFunction(false,false)}/>
       
    <VaContentMobile Show={true}>     
            <RightContent reverse={false} FullWidth={true} >
              <ImgHolder src = {AnimeDetail[CounterChar].character.images.jpg.image_url} alt=""/>
              <DetailContent FlexEnd = {false} > 
                <ContentP>{AnimeDetail[CounterChar].character.name}</ContentP>
                <ContentP>{AnimeDetail[CounterChar].role}</ContentP>  
              </DetailContent >
            </RightContent>
    </VaContentMobile>
  </VaContentMobileContainer>
    
    
    }
  

</>
}
export default Va_Character_Staff




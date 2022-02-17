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

const Va_Character_Staff = ({IDAnim, isStaff}) => {




    // Anime data Container 
    const [AnimeDetail,setAnimeDetail]=useState({})

    // Loading
    const [isLoading,setIsloading]=useState(true);


    //Character Array
    const [CharArray, setCharArray] = useState([])

    //Staff Array
    const [StaffArray, setStaffArray] = useState([])
  
    //Character counter
    const [CounterChar, setCounterChar] = useState(0)

       //Character counter
    const [CounterStaff, setCounterStaff] = useState(0)
  
  

  
    //Filled featuredAnime array with data from API
    useEffect(()=>{
  
      const getData = async () =>{
  
  
        const result = await axios (`https://api.jikan.moe/v3/anime/${IDAnim}/characters_staff`)
        
        setAnimeDetail(result.data)
        
        setCharArray(result.data.characters)

        setStaffArray(result.data.staff)

        setIsloading(false);
     
        
  
      }
  
      
  
      getData()
  
  
    },[IDAnim])


    

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
            
            setCounterChar(CharArray.length-1)
      
          } else {
      
            setCounterChar(CounterChar-1)
      
          }
      
        }else{
      
          if (CounterChar === CharArray.length-1) {
      
            setCounterChar(0)
      
          } else {
      
            setCounterChar(CounterChar+1)
      
          }      
      
        }     
      
      
      }



   
     
    }
  
  


    return isLoading ? <h1>Loading....</h1>:
<>
    {isStaff ?
    AnimeDetail.staff.slice(0, 4).map((content)=>(
     
      <VaContent>
          <RightContent reverse={false} FullWidth={true}>
            <ImgHolder src = {content.image_url} alt=""/>
            <DetailContent FlexEnd = {false} > 
              <ContentP>{content.name}</ContentP>
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
     AnimeDetail.characters.slice(0, 10).map((content, index)=>(
      <VaContent >
          <RightContent reverse={false} FullWidth={false}>
            <ImgHolder src = {content.image_url} alt=""/>
            <DetailContent FlexEnd = {false} > 
             <ContentP>{content.name}</ContentP> 
             <ContentP>{content.role}</ContentP>  
            </DetailContent >
          </RightContent>
     

      {content.voice_actors.filter(result => result.language === 'Japanese').slice(0,1).map(newArr => (
      <RightContent reverse={true}>   
          <ImgHolder src = {newArr.image_url} alt=""/>
          <DetailContent FlexEnd = {true}> 
              <ContentP>{newArr.name}</ContentP> 
              <ContentP>{newArr.language}</ContentP>  
          </DetailContent >
      </RightContent>  
      ))}

  </VaContent>
 
     ))}
  
  
  {isStaff ?
  <VaContentMobileContainer>
  <ArrowNavleft onClick={() => NavFunction(true,true)}/>
  <ArrowNavright onClick={() => NavFunction(false,true)}/>
     
  <VaContentMobile Show={true}>     
          <RightContent reverse={false} FullWidth={true} >
            <ImgHolder src = {StaffArray[CounterStaff].image_url} alt=""/>
            <DetailContent FlexEnd = {false} > 
            <ContentP>{StaffArray[CounterStaff].name}</ContentP>
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
            <ImgHolder src = {CharArray[CounterChar].image_url} alt=""/>
            <DetailContent FlexEnd = {false} > 
             <ContentP>{CharArray[CounterChar].name}</ContentP> 
             <ContentP>{CharArray[CounterChar].role}</ContentP>  
            </DetailContent >
          </RightContent>
     

      {CharArray[CounterChar].voice_actors.filter(result => result.language === 'Japanese').slice(0,1).map(newArr => (
      <RightContent reverse={true} FullWidth={true}>   
          <ImgHolder src = {newArr.image_url} alt=""/>
          <DetailContent FlexEnd = {true}> 
              <ContentP>{newArr.name}</ContentP> 
              <ContentP>{newArr.language}</ContentP>  
          </DetailContent >
      </RightContent>  
      ))}

  </VaContentMobile>

</VaContentMobileContainer>

}

</>
}
export default Va_Character_Staff




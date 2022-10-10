import { GlobalStyle,
        RootContainer } from "./GlobalStyle";
import { useState,useEffect} from 'react';
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import DetailPage from "./Components/DetailPage";
import AnimeGenre from "./Components/AnimeGenrePage";
import AnimeList from "./Components/AnimeListPage";
import SearchMenu from "./Components/Search_HamburgerMenu";



import { BrowserRouter as 
  Router, 
  Routes,
  Route,
 } from "react-router-dom";

  import axios from 'axios'

function App() {

  //featured Anime data Container 
  const [featuredAnime,setFeaturedAnime]=useState({})
  const [featuredManga,setFeaturedManga]=useState({})


  const [isLoading,setIsloading]=useState(true);
  const [isLoadingManga,setIsloadingManga]=useState(true);

  const [isOpen,setIsOpen] = useState (false)

  const [SearchOpen,setSearchOpen] = useState (false)

  const [MobileSearchQuery,setMobileSearchQuery] = useState('')



  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{



      const resultAnime = await axios ('https://api.jikan.moe/v4/anime/48926/full')
    
      const resultManga = await axios ('https://api.jikan.moe/v4/manga/2/full')
      
        
      setFeaturedManga(resultManga.data)
      setFeaturedAnime(resultAnime.data)

      setIsloading(false)
      setIsloadingManga(false)

    }

    

    getData()


  },[])

  
  
 const Toggle = (isToggle) =>{


     setIsOpen(isToggle)
     
     
 }

 const ToggleSearch = (isToggle) =>{


    setSearchOpen(isToggle)


 }

 const MQuery = (value) =>{

    setMobileSearchQuery(value)

 }
 
  



  return (
    <Router>
      <GlobalStyle/>
        <RootContainer>
        <Header ToggleFunc = {Toggle} ToggleSearchBar={ToggleSearch} SendSearchIsOpen={SearchOpen} MobileQuery={MobileSearchQuery}/>
        <SearchMenu ISOPEN = {isOpen} ToggleFunc = {Toggle} OpenSearch={SearchOpen} MobileQuery={MQuery}/>
        <Routes>
          <Route path='/' element={<>
                                  <FirstSection Loading = {isLoading} FeaturedAnime = {featuredAnime} isAnime = {true} isLightBg={true}/> 
                                  <FirstSection Loading = {isLoadingManga} FeaturedAnime = {featuredManga} isAnime = {false} isLightBg={false}/>
                                  </>}/>
          <Route path='/DetailPage/:type/:id' element={<DetailPage/> }/>
          <Route path='/Genre/:type' element={<AnimeGenre /> }/>
          <Route path='Genre/:type/List/:genre/:id/:page' element={ <AnimeList/> }/>
        </Routes>
        </RootContainer>
    </Router>
  );
}

export default App;



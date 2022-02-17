import { GlobalStyle } from "./GlobalStyle";
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



  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{



      const resultAnime = await axios ('https://api.jikan.moe/v3/anime/48926')
      const resultManga = await axios ('https://api.jikan.moe/v3/manga/2')
        
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

 
  



  return (
    <Router>
      <GlobalStyle/>
        <Header ToggleFunc = {Toggle}/>
        <SearchMenu ISOPEN = {isOpen} ToggleFunc = {Toggle}/>
        <Routes>
          <Route path='/' element={<>
                                  <FirstSection Loading = {isLoading} FeaturedAnime = {featuredAnime} isAnime = {true} isLightBg={true}/> 
                                  <FirstSection Loading = {isLoadingManga} FeaturedAnime = {featuredManga} isAnime = {false} isLightBg={false}/>
                                  </>}/>
          <Route path='/DetailPage/:id' element={<DetailPage/> }/>
          <Route path='/Genre' element={<AnimeGenre /> }/>
          <Route path='Genre/List/:id/:page' element={ <AnimeList/> }/>
        </Routes>
    </Router>
  );
}

export default App;



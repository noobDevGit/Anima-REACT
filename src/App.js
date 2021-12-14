import { GlobalStyle } from "./GlobalStyle";
import { useState,useEffect } from 'react';
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";

function App() {

  //featured Anime data Container 
  const [featuredAnime,setFeaturedAnime]=useState([])

  //Filled featuredAnime array with data from API
  useEffect(()=>{

    const getData = async () =>{


      const data = await FetchFeaturedAnime()

      setFeaturedAnime(data)


    }

    getData()


  },[])


  //Fetch Data from API
  const FetchFeaturedAnime = async () =>{

    const result = await fetch('https://api.jikan.moe/v3/anime/48926');

    const data = await result.json();

    return data


  }




  return (
    <>
    <GlobalStyle/>
    <Header/>
   < FirstSection FeaturedAnime = {featuredAnime}/>  
   </>
  );
}

export default App;

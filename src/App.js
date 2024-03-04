import { useEffect, useState } from 'react';
import './App.css';
import apiConfig from './api/apiConfig';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App({movies}) {

  const [data, setData] = useState();   //useState() is a hook used to store dynamic values
  console.log(data);

  //fat-arrow function or anonymous function or arrow function
  const fetchMovie = async() => {
        try {
          const response = await apiConfig.get("/api/v1/movies");
          //console.log(response);
          setData(response.data);
        } catch (error) {
        console.log("error", error);  
        }
  };

  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  
  const getMovieData = async (movieId) => {
    try{
      const response = await api.get(`/api/v1/movies/${movies}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie);
    }
    catch(error){

    }
  }
  
  useEffect(() => { 
    fetchMovie();
  
    
  }, [])
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route path = "/" element = {<Home movies={data}/>}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData = {getMovieData} reviews = {reviews} setReviews = {setReviews}/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

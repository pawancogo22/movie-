import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
const Movie = () => {
  const router = useRouter()
  const [movieData, setMovieData] = useState(null);
  const { movie } = router.query
  const getMovieRequest = async (resp) => {
    const url = `http://www.omdbapi.com/?i=${movie}&apikey=3392ffe5`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON) {
        // console.log(responseJSON);
        setMovieData(responseJSON);
    }
  };
  const setSearchValues = (val) => {
    setSearchValue(val);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
        console.log('This will run after 1 second!')
        getMovieRequest(movie);
        console.log(movieData, "dddd");
      }, 1000);
      return () => clearTimeout(timer);
    
  }, []);
  return (
      <>
        {/* <a className='link' href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank">Dark Version</a> */}
        {
            movieData  ? 
            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
                    {/* <h1>{movieData.Title}</h1> */}
                    <h4>2017, David Ayer</h4>
                    <span className="minutes">117 min</span>
                    <p className="type">Action, Crime, Fantasy</p>
                    </div>
                    <div className="movie_desc">
                    <p className="text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
                    </p>
                    </div>
                    <div className="movie_social">
                    <ul>
                        <li><i className="material-icons">Like &hearts;</i></li>
                    </ul>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
                </div>: "Loading..."
        }
        
      </>
  )
}

export default Movie
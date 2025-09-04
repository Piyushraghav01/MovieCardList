// import MovieCard from './Moviecard'
// import MovieList from './MovieList';

// import HandingOne from "./HandingOne";

// function App(){
//   return(
//     <>
//     <h1>Movie App</h1>
//     <MovieList />
//     </>
//   )
// }

// export default App;
// import MovieCard from "./Moviecard";
import React, { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesdata";
// import Student from "./Student"


// import HandlingTwo from "./HandlingTwo";
// import HandingOne from "./HandingOne";
import './index.css';

// function App() {
//   return (
//     <>
      {/* <Student name="Alexa!" marks={10}/>
    <Student /> */}
    {/* <Navbar />
    <MovieList /> */}

    {/* <HandingOne />
    <HandlingTwo /> */}
    // </>
//   );
// }

// Student.defaultProps = {
//   name: "Hello",
//   marks: 11,
// }

class App extends Component{
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleInStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars <= 5) {
      movies[movieId].stars += 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    let { movies,cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].rem = !movies[movieId].rem;
    console.log(movies[movieId].rem)

    if(movies[movieId].rem){
      cartCount = cartCount +1
    } else{
      cartCount -= 1
    }

    this.setState({
      movies,
      cartCount,
    });
    console.log(cartCount);

  };


  render(){
    const {movies, cartCount} = this.state;
    return(
      <>
      <Navbar cartCount={cartCount}/>
      <MovieList movies={movies}
       addStars={this.handleInStars}
       desStars={this.handleDecStars}
       handlefav={this.handleToggleFav}
       removeState={this.handleAddtocart}/>
      </>
    )
  }
}
export default App;

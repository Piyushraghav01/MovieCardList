import React from "react";
import MovieCard from "./Moviecard";
import { movies } from "./moviesdata";

class MovieList extends React.Component {
  
  render() {
    // const {title, plot,price,rating,stars,fav,rem,poster} = this.state.movies
    const { movies, addStars, desStars, handlefav, removeState } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie} 
            addStars={addStars}
            desStars={desStars}
            handlefav={handlefav}
            removeState={removeState}
            
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;

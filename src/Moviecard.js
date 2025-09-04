
function MovieCart(props) {
  
    // console.log(props);
    const { movies, addStars, desStars, handlefav, removeState } = props;
    const { movies: data } = props;
    console.log(data);
    const { title, plot, price, rating, stars, fav, rem } = props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            ></img>
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={() => {
                    desStars(movies);
                  }}
                />

                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />

                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{stars}</span>
              </div>

              {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={() => {
                    handlefav(movies);
                  }}
                >
                  Un-Favourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={() => {
                    handlefav(movies);
                  }}
                >
                  Favourite
                </button>
              )}

              {rem ? (
                <button
                  className="uncart-btn"
                  onClick={() => {
                    removeState(movies);
                  }}
                >
                  Remove to Card
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => {
                    removeState(movies);
                  }}
                >
                  Add to Card
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default MovieCart;

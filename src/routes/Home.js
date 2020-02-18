import React from "react";
import axios from "axios";
import Movie from "../components/Moive";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
  }

  getMovies = async () => {
    return await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  }

  async componentDidMount() {
    const {data: { data: {movies}}} = await this.getMovies();
    this.setState({ movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {
                movies.map(movie => {
                  return (
                    <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    /> 
                  );
                })
              }
            </div>
          )}
      </section>
    );
  }
}

export default Home;
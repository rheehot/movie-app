import React from "react";
import axios from "axios";
import Movie from "./Moive";

class App extends React.Component {
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
      <div>
        {isLoading 
          ? "Loadding..." 
          : movies.map(movie => {
            return (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
              /> 
            );
        })}
      </div>
    );
  }
}

export default App;
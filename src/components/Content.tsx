import { MovieCard } from "./MovieCard"

import '../styles/content.scss';

export function Content({movies, selectedGenre}) {
  // Complete aqui
  return(
    <>
      <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
    </>
  )
}
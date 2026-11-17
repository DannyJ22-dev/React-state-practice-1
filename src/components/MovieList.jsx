import { movies } from "../mock-data/movies";

export default function MovieList({currentGenre}){
    const filteredMovies = movies.filter(movie => movie.genre === currentGenre);
    filteredMovies.map((movie) => (
        <li>{movie.title}</li>
    ))
    return(
        <>
            <li>{filteredMovies}</li>
        </>
    )
}
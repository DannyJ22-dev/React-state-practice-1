import './App.css';
import { useState } from 'react';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import { movies } from './mock-data/movies'
import { genres } from './mock-data/genres'

function App() {
	const [currentGenre, setGenre] = useState("")
	return(
	<>
		<GenreList/>
		<MovieList/>
	</>
	)
}

export default App;

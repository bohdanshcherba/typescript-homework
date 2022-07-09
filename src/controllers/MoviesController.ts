import '../interfaces';
import api from '../config';
import { Movie, Movies } from '../interfaces';
import { typesMovie } from '../utils/enums';
import mapper from '../helpers/mapper';


async function getMovies(page: number, type: typesMovie): Promise<Movies> {
    const response = await fetch(`${api.API_URL}movie/${type}?api_key=${api.API_KEY}&page=${page}`);
    const data = await response.json();

    return mapper(data.results);
}

async function searchMovie(query: string): Promise<Movies> {
    const response = await fetch(`${api.API_URL}search/movie?api_key=${api.API_KEY}&query=${query}`);
    const data = await response.json();

    return mapper(data.results);
}

async function getMovieById(movieId: string | null): Promise<Movie> {
    const response = await fetch(`${api.API_URL}movie/${movieId}?api_key=${api.API_KEY}`);
    return await response.json();
}

export { getMovies, searchMovie, getMovieById };

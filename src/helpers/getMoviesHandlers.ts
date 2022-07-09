import { typesMovie } from '../utils/enums';
import { Movies } from '../interfaces';
import { getMovies, searchMovie } from '../controllers/MoviesController';
import { showMovies } from './showMovies';
import { addToFavoriteHandler } from './favoriteHandler';


const input_search = document.getElementById('search') as HTMLInputElement;
let pageNumber = 1;
let currentType: typesMovie = typesMovie.popular;

export const getMoviesByType = async (p: number, type: typesMovie):Promise<void> => {
    const movies: Movies = await getMovies(p, type);

    showMovies(movies);
    addToFavoriteHandler(movies);

};

export const searchMovieHandler = async ():Promise<void> => {

    const searched: string = input_search.value;

    const movies: Movies = await searchMovie(searched);

    showMovies(movies);
    addToFavoriteHandler(movies);


};

export const loadMore = async ():Promise<void> => {
    await getMoviesByType(pageNumber, currentType);
    pageNumber++;
    window.scrollTo({
        top: 200,
        behavior: "smooth"
    });
};

export const popular = async ():Promise<void> => {
    await getMoviesByType(1, typesMovie.popular);
    currentType = typesMovie.popular;
    pageNumber = 1;

};

export const upcoming = async ():Promise<void> => {
    await getMoviesByType(1, typesMovie.upcoming);
    currentType = typesMovie.upcoming;
    pageNumber = 1;

};

export const top_rated = async () => {
    await getMoviesByType(1, typesMovie.top_rated);
    currentType = typesMovie.top_rated;
    pageNumber = 1;

};

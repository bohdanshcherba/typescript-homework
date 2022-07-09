import { Movies } from '../interfaces';
import { getMovies } from '../controllers/MoviesController';
import randomEnum from './randomEnum';
import { typesMovie } from '../utils/enums';

const random_movie_name = document.getElementById('random-movie-name');
const random_movie_section = document.getElementById('random-movie');
const random_movie_description = document.getElementById('random-movie-description');

const setRandomMovie = async ():Promise<void> => {

    const random_page: number = Math.floor(Math.random() * 20);

    const movies: Movies = await getMovies(random_page, randomEnum(typesMovie)).then(el => el);
    const random_number: number = Math.floor(Math.random() * movies.results.length);

    const random_movie = movies.results[random_number];

    random_movie?.backdrop_path ?
        random_movie_section!.style.backgroundImage = `url('https://image.tmdb.org/t/p/original//${random_movie?.backdrop_path}')`
        : random_movie_section!.style.backgroundColor = 'grey';

    random_movie_description!.innerText = random_movie.original_title;
    random_movie_name!.innerText = random_movie.overview;

};

export default setRandomMovie

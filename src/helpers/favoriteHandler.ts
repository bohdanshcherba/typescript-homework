import { Movies } from '../interfaces';
import { favourite } from '../utils/enums';
import { getMovieById } from '../controllers/MoviesController';
import { FavoriteMoviesTemp } from '../utils/templates';

const storage = window.localStorage;
const favorite_movies = document.getElementById('favorite-movies');

const addToFavoriteHandler = (movies: Movies) => {

    movies.results.map(movie => {
        const idMovie = String(movie.id);
        const btn = document.getElementById(`${idMovie}`);


        async function like() {
            if (storage.getItem(idMovie)) {
                storage.removeItem(idMovie);
                btn!.style.fill = favourite.noLiked;
                btn!.style.stroke = favourite.noLiked;
            } else {
                storage.setItem(idMovie, favourite.liked);
                btn!.style.fill = favourite.liked;
                btn!.style.stroke = favourite.liked;
            }
            await updateFavorite();
        }
        btn?.addEventListener('click', like);
    });
};

const updateFavorite = async ():Promise<void> => {

    const favorite_movie: Movies = {
        length: storage.length,
        page: 1,
        results: [],
    };

    for (let i = 0; i < storage.length; i++) {
        favorite_movie?.results.push(await getMovieById(storage.key(i)));
    }


    favorite_movies!.innerHTML = favorite_movie?.results.map(movie => {
        return FavoriteMoviesTemp(movie.overview, movie.backdrop_path, movie.id, movie.release_date, favourite.liked);
    }).toString() || '';

    addToFavoriteHandler(favorite_movie);

};

export { addToFavoriteHandler,updateFavorite }

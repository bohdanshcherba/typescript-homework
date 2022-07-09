import { Movies } from '../interfaces';
import { favourite } from '../utils/enums';
import { MoviePostTemp } from '../utils/templates';

const films = document.getElementById('film-container');
const storage = window.localStorage;

export const showMovies = (movies: Movies) => {
    films!.innerHTML = movies.results.map(movie => {
            const id = String(movie.id);

            let inFavourite: favourite = favourite.noLiked;

            if (storage.getItem(id)) {
                inFavourite = favourite.liked;
            }

            return MoviePostTemp(movie.title, movie.backdrop_path, movie.release_date, movie.id, inFavourite);
        },
    ).toString();
};

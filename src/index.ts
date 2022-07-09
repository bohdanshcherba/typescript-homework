
import './config';
import setRandomMovie from './helpers/setRandomMovie';
import  { updateFavorite } from './helpers/favoriteHandler';
import {loadMore, searchMovieHandler, upcoming, popular, top_rated} from './helpers/getMoviesHandlers';


const btn_loadMore = document.getElementById('load-more');
const btn_upcoming = document.getElementById('upcoming');
const btn_popular = document.getElementById('popular');
const btn_top_rated = document.getElementById('top_rated');
const btn_search = document.getElementById('submit');


export async function render(): Promise<void> {
    await setRandomMovie();
    await loadMore();
    await updateFavorite();

    btn_search?.addEventListener('click', searchMovieHandler);
    btn_loadMore?.addEventListener('click', loadMore);
    btn_upcoming?.addEventListener('click', upcoming);
    btn_popular?.addEventListener('click', popular);
    btn_top_rated?.addEventListener('click', top_rated);


}

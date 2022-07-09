import { Movies } from '../interfaces';

const mapper = (movies: Array<any>):Movies =>{

    const res: Movies = {
        page: 1,
        results: [],
    };

    res.results = movies.map(item => {
        return {
            backdrop_path: item.backdrop_path,
            id: item.id,
            title: item.title,
            overview: item.overview,
            original_title: item.original_title,
            release_date: item.release_date
        }
    })

    return res
}

export default mapper

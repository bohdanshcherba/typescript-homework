
export interface Movie{
    backdrop_path: string
    id: number
    original_title: string
    overview: string
    release_date: string
    title: string

}

export interface Movies {
    page: number,
    results: Array<Movie>
}


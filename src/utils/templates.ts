import {favourite} from './enums';

const no_preview_img = 'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png';

export const MoviePostTemp = (name: string, image_path: string, release_date: string, id: number, favourite: favourite): string => {

    return ` <div class='col-lg-3 col-md-4 col-12 p-2'>
                            <div class='card shadow-sm'>
                                <img
                                    src='${image_path ? `https://image.tmdb.org/t/p/original//${image_path}` : no_preview_img}'
                                />
                                
                                <svg
                                    id='${id}'
                                    xmlns='http://www.w3.org/2000/svg'
                                    stroke='${favourite}'
                                    fill='${favourite}'
                                    width='50'
                                    height='50'
                                    class='bi bi-heart-fill position-absolute p-2'
                                    viewBox='0 -2 18 22'
                                    style='cursor: pointer'
                                >
                                    <path
                                        fill-rule='evenodd'
                                        d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                                    />
                                </svg>
                                
                                <div class='card-body'>
                                    <p class='card-text truncate'>
                                        ${name}
                                    </p>
                                    <div class='d-flex justify-content-between align-items-center'>
                                        <small class='text-muted'>${release_date}</small>
                                    </div>
                                </div>
                            </div>
                            
                        </div>`;
};

export const FavoriteMoviesTemp = (description: string, image_path: string, id: number, release_date: string, favourite: favourite) => {
    return `
        <div class='col-12 p-2'>
                    <div class='card shadow-sm'>
                        <img
                            src='${image_path ? `https://image.tmdb.org/t/p/original//${image_path}` : no_preview_img}'
                        />
                        <svg
                            id='${id}'
                            xmlns='http://www.w3.org/2000/svg'
                            stroke='${favourite}'
                            fill='${favourite}'
                            width='50'
                            height='50'
                            class='bi bi-heart-fill position-absolute p-2'
                            viewBox='0 -2 18 22'
                            style='cursor: pointer'

                        >
                            <path
                                fill-rule='evenodd'
                                d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                            />
                        </svg>
                        <div class='card-body'>
                            <p class='card-text truncate'>
                                ${description}
                            </p>
                            <div
                                class='
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                '
                            >
                                <small class='text-muted'>${release_date}</small>
                            </div>
                        </div>
                    </div>
                </div>
    `;
};

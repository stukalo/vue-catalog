import axios from 'axios';
import ApiServiceMock from './ApiServiceMock';

const BASE_URL = 'https://react-cdp-api.herokuapp.com/movies/';

const convert = ({
  id,
  title,
  tagline,
  vote_average,
  vote_count,
  release_date = '',
  poster_path,
  overview,
  budget,
  revenue,
  runtime,
  genres,
}) => {
  return {
    id,
    title,
    year: release_date.split('-')[0],
    runtime,
    genres,
    director: '',
    actors: '',
    plot: overview,
    posterUrl: poster_path,
    rating: vote_average,
  }
}

const ApiService = {
  getFilms: async ({
    from = 0,
    count = 9,
    sort = {
      by: 'rating',
      dir: 'desc',
    },
    search = {
      value: '',
      by: 'title'
    },
    lang = 'en',
  }) => {
    const params = {
      sortBy: sort.by,
      sortOrder: sort.dir,
      search: search.value,
      searchBy: search.by,
      offset: from,
      limit: count,
    };

    if (search.by === 'genre') {
      params.search = [search.by];
    }

    const result = await axios.get(BASE_URL, { params });
    return result.data.data.map(movie => convert(movie));
  },
  getFilm: async ({ id }) => {
    const result = await axios.get(`${BASE_URL}${id}`);
    return convert(result.data);
  },
}

export default ApiService;

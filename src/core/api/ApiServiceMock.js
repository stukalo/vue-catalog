import films_en from '../../mock/films_en.json';
import films_ru from '../../mock/films_ru.json';

const films = {
  en: films_en,
  ru: films_ru,
};

const sortBy = (items, sort) => items.sort((a, b) => {
  if (a[sort.by] === b[sort.by]) {
    return 0;
  }

  if (a[sort.by] > b[sort.by]) {
    return sort.dir === 'asc' ? 1 : -1;
  }

  return sort.dir === 'asc' ? -1 : 1;
});

const getSearchFunction = (search) => {
  if (!search.value || !search.by) {
    return null;
  }

  switch (search.by) {
    case 'genre':
      return (film) => film.genres.some((genre) => genre.toLowerCase()
        .includes(search.value.toLowerCase()));
    case 'title':
      return (film) => film.title.toLowerCase()
        .includes(search.value.toLowerCase());
    case 'id':
      return (film) => film.id === search.value;
    default:
      return null;
  }
};

const getFilms = (query) => new Promise((resolve) => {
  try {
    const {
      from = 0,
      count = 9,
      sort = {
        by: 'rating',
        dir: 'desc',
      },
      search = null,
      lang = 'en',
    } = query;

    const searchFunction = getSearchFunction(search);
    const data = films[lang] || [];
    const filtered = (search && search.value)
      ? data.filter(searchFunction)
      : data;
    const sorted = sortBy(filtered, sort);
    const result = sorted.slice(from, from + count);
    resolve(result);
  } catch (e) {
    resolve([]);
  }
});

const getFilm = ({
  id,
  lang = 'en'
}) => new Promise((resolve) => {
  const data = films[lang] || [];
  const result = data.find(film => film.id === id);
  resolve(result);
});

const ApiServiceMock = {
  getFilms,
  getFilm,
};

export default ApiServiceMock;

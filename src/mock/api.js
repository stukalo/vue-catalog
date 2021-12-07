import films from './films.json';

const sortBy = (items, sort) => items.sort((a, b) => {
  if (a[sort.by] === b[sort.by]) {
    return 0;
  }

  if (a[sort.by] > b[sort.by]) {
    return sort.dir === 'asc' ? 1 : -1;
  }

  return sort.dir === 'asc' ? -1 : 1;
});

export const getSearchFunction = (search) => {
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

export const getFilms = (query) => new Promise((resolve) => {
  try {
    const {
      from = 0,
      count = 9,
      sort = {
        by: 'rating',
        dir: 'desc',
      },
      search = null,
    } = query;

    const searchFunction = getSearchFunction(search);
    const filtered = (search && search.value)
      ? films.filter(searchFunction)
      : films;
    const sorted = sortBy(filtered, sort);
    const result = sorted.slice(from, from + count);
    resolve(result);
  } catch (e) {
    resolve([]);
  }
});


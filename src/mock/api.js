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

export const getFilms = (query) => new Promise((resolve) => {
  try {
    const {
      from = 0,
      count = 9,
      sort = {
        by: 'imdbRating',
        dir: 'desc',
      },
      search = null,
    } = query;

    const filtered = search
      ? films.filter((film) => film[search.by] === film[search.value])
      : films;
    const sorted = sortBy(filtered, sort);
    resolve(sorted.slice(from, from + count));
  } catch (e) {
    resolve([]);
  }
});

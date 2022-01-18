# Movies public API

---

## BaseUrl

`react-cdp-api.herokuapp.com`

---

### Model `Movie`

- `id` number
- `title` string
- `tagline` string
- `vote_average` number
- `vote_count` 0
- `release_date` string
- `poster_path` string
- `overview` string
- `budget` 0
- `revenue` 0
- `runtime` 0
- `genres` string[]

---
### `GET` `/movies`

- `sortBy`: string - field to sort by
- `sortOrder`: string ['desc', 'asc'] - define sort direction
- `search`: string - search value
- `searchBy`: string ['title', 'genres'] - search type
- `filter`: array - to filter by genres
- `offset`: number - result offset for pagination
- `limit`: number - result items limit for pagination
---
### `GET` `/movies/{id}`

- `id`: number - field to sort by
---

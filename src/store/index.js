import { createStore } from 'vuex';
import * as actions from './actions';
import { getFilms } from '../mock/api';

export default createStore({
  state: {
    film: null,
    isLoading: false,
    hasNext: true,
    results: [],
    sort: {
      by: 'year',
      dir: 'desc',
    },
    search: {
      by: 'title',
      value: '',
    },
  },
  actions: {
    [actions.SEARCH_SUBMIT]: ({ dispatch }) => {
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SORT_BY_CHANGE]: ({ state, dispatch }, value) => {
      state.sort.by = value;
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SEARCH_BY_CHANGE]: ({ state, dispatch }, value) => {
      state.search.by = value;
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SEARCH_VALUE_CHANGE]: ({ state, dispatch }, value) => {
      state.search.value = value;
    },
    [actions.SELECTED_CHANGE]: ({ state }, id) => {
      getFilms({ search: { by: 'id', value: Number(id) } }).then((films) => {
        state.film = films[0] || null;
      });
    },
    [actions.GET_INITIAL_SEARCH_RESULTS]: async ({ state }) => {
      const { sort, search } = state;

      state.results = [];
      state.hasNext = true;
      state.isLoading = true;

      const results = await getFilms({
        sort,
        search,
      });

      if (results.length) {
        state.results = results;
      } else {
        state.hasNext = false
      }

      state.isLoading = false;
    },
    [actions.GET_NEXT_SEARCH_RESULTS]: async ({ state }) => {
      const { sort, search, results } = state;
      state.isLoading = true;

      const nextResults = await getFilms({
        from: results.length,
        sort,
        search,
      });

      if (results.length) {
        state.results = [...results, ...nextResults];
      } else {
        state.hasNext = false;
      }

      state.isLoading = false;
    },
  },
});

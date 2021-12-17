import { createStore } from 'vuex';
import * as actions from '../constants/actions';
import * as mutations from '../constants/mutations';
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
  mutations: {
    [mutations.SET_IS_LOADING]: (state, isLoading) => {
      state.isLoading = isLoading;
    },
    [mutations.SET_HAS_NEXT]: (state, hasNext) => {
      state.hasNext = hasNext;
    },
    [mutations.SET_SORT_BY]: (state, by) => {
      state.sort.by = by;
    },
    [mutations.SET_SEARCH_BY]: (state, by) => {
      state.search.by = by;
    },
    [mutations.SET_SEARCH_VALUE]: (state, value) => {
      state.search.value = value;
    },
    [mutations.SET_SELECTED_FILM]: (state, film) => {
      state.film = film;
    },
    [mutations.SET_SEARCH_RESULTS]: (state, results) => {
      state.results = results;
    },
  },
  actions: {
    [actions.SEARCH_SUBMIT]: ({ dispatch }) => {
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SORT_BY_CHANGE]: ({ commit, dispatch }, value) => {
      commit(mutations.SET_SORT_BY, value);
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SEARCH_BY_CHANGE]: ({ commit, dispatch }, value) => {
      commit(mutations.SET_SEARCH_BY, value);
      dispatch(actions.GET_INITIAL_SEARCH_RESULTS);
    },
    [actions.SEARCH_VALUE_CHANGE]: ({ commit, dispatch }, value) => {
      commit(mutations.SET_SEARCH_VALUE, value);
    },
    [actions.SELECTED_CHANGE]: ({ commit }, id) => {
      getFilms({ search: { by: 'id', value: Number(id) } }).then((films) => {
        commit(mutations.SET_SELECTED_FILM, films[0] || null);
      });
    },
    [actions.GET_INITIAL_SEARCH_RESULTS]: async ({ commit, state }) => {
      const { sort, search } = state;

      commit(mutations.SET_SEARCH_RESULTS, []);
      commit(mutations.SET_HAS_NEXT, true);
      commit(mutations.SET_IS_LOADING, true);

      const results = await getFilms({
        sort,
        search,
      });

      if (results.length) {
        commit(mutations.SET_SEARCH_RESULTS, results);
      } else {
        commit(mutations.SET_HAS_NEXT, false);
      }

      commit(mutations.SET_IS_LOADING, false);
    },
    [actions.GET_NEXT_SEARCH_RESULTS]: async ({ commit, state }) => {
      const { sort, search, results } = state;
      commit(mutations.SET_IS_LOADING, true);

      const nextResults = await getFilms({
        from: results.length,
        sort,
        search,
      });

      if (results.length) {
        commit(mutations.SET_SEARCH_RESULTS, [...results, ...nextResults]);
      } else {
        commit(mutations.SET_HAS_NEXT, false);
      }

      commit(mutations.SET_IS_LOADING, false);
    },
  },
});

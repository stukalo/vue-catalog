import { createStore } from 'vuex';
import * as actions from './actions';
import ApiService from '../core/api/ApiService';
import { getSearchParam } from '../utils/url';
import { DEFAULT_LANG } from '../constants/common';

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
    lang: getSearchParam('lang') || DEFAULT_LANG,
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
    [actions.SELECTED_CHANGE]: async ({ state }, id) => {
      const { lang } = state;
      state.film = await ApiService.getFilm({ id: Number(id), lang });
    },
    [actions.GET_INITIAL_SEARCH_RESULTS]: async ({ state }) => {
      const { sort, search, lang } = state;

      state.results = [];
      state.hasNext = true;
      state.isLoading = true;

      const results = await ApiService.getFilms({
        sort,
        search,
        lang,
      });

      if (results.length) {
        state.results = results;
      } else {
        state.hasNext = false
      }

      state.isLoading = false;
    },
    [actions.GET_NEXT_SEARCH_RESULTS]: async ({ state }) => {
      const { sort, search, results, lang } = state;
      state.isLoading = true;

      const nextResults = await ApiService.getFilms({
        from: results.length,
        sort,
        search,
        lang,
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

import { shallowMount } from '@vue/test-utils';
import FilmDetails from '../FilmDetails';
import * as actions from '../../../store/actions';
import { createOptions } from '../../../tests/createOptions';
import { deepCopy } from '../../../utils/deepCopy';
import { DEFAULT_SELECTED_FILM_ID } from '../../../constants/common';

const filmId = 1;
const film = {
  id: filmId,
    title: 'Film Title',
    year: '2100',
    runtime: '100',
    genres: [
    'genre-1',
    'genre-2',
    'genre-3',
  ],
    director: 'Film Director',
    actors: 'Actor-1, Actor-2',
    plot: 'Film Plot',
    posterUrl: 'https//url.com/film-poster.png',
    rating: '10.0'
};
const $route = {
  params: {
    id: filmId.toString(),
  }
};

const $store = {
  state: {
    film
  },
  actions: {
    [actions.SELECTED_CHANGE]: jest.fn(),
  },
};

describe('FilmDetails', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const options = createOptions({ $store, $route });
      const wrapper = shallowMount(FilmDetails, options);
      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('beforeMount', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should not call selectedChange', () => {
      const options = createOptions({ $store, $route });
      shallowMount(FilmDetails, options);

      expect($store.actions[actions.SELECTED_CHANGE]).not.toBeCalled();
    });

    it('should call selectedChange with default film id', () => {
      const _store = deepCopy($store);
      const _route = deepCopy($route);
      _store.state.film = null;
      _route.params.id = null;
      const options = createOptions({ $store: _store, $route: _route });

      shallowMount(FilmDetails, options);

      expect(_store.actions[actions.SELECTED_CHANGE]).toBeCalled();
      expect(_store.actions[actions.SELECTED_CHANGE].mock.calls[0][1]).toEqual(DEFAULT_SELECTED_FILM_ID);
    });

    it('should call selectedChange with query param id', () => {
      const _store = deepCopy($store);
      _store.state.film = null;
      const options = createOptions({ $store: _store, $route });

      shallowMount(FilmDetails, options);

      expect(_store.actions[actions.SELECTED_CHANGE]).toBeCalled();
      expect(_store.actions[actions.SELECTED_CHANGE].mock.calls[0][1]).toEqual($route.params.id);
    });
  });

  describe('attributes', () => {
    let wrapper;

    beforeEach(() => {
      const options = createOptions({ $store, $route });
      wrapper = shallowMount(FilmDetails, options);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should have correct poster img', () => {
      const img = wrapper.find('.film_poster>img');
      expect(img.attributes('src')).toEqual(film.posterUrl);
    });

    it('should have correct title', () => {
      const img = wrapper.find('.title-block_title');
      expect(img.text()).toEqual(film.title);
    });

    it('should have correct rating',  () => {
      const span = wrapper.find('.rating_value');
      expect(span.text()).toEqual(film.rating);
    });

    it('should have correct genres', () => {
      const span = wrapper.find('.info_genre>span');
      expect(span.text()).toEqual(film.genres.join(', '));
    });

    it('should have correct year',  () => {
      const span = wrapper.find('.year_value');
      expect(span.text()).toEqual(film.year);
    });

    it('should have correct duration',  () => {
      const span = wrapper.find('.duration_value');
      expect(span.text()).toEqual(film.runtime);
    });

    it('should have correct plot',  () => {
      const span = wrapper.find('.info_plot');
      expect(span.text()).toEqual(film.plot);
    });
  });
});

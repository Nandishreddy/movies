import React from 'react';
import {mount} from 'enzyme';
import MovieList from '../components/MovieList'

import moviesList from '../../public/moviesList.json'

describe('MovieList component', () => {

    test('snapshot test', () => {
        const wrapper = mount(<MovieList mock={moviesList} />);
        expect(wrapper).toMatchSnapshot();
      });

    test('should render movie details component', () => {
        const wrapper = mount(<MovieList mock={moviesList} />);
        expect(wrapper.find('btn btn-primary btn-sm').exists()).toBe(true);
        expect(wrapper.find('btn btn-primary btn-sm').exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('MovieListing');
      });
});
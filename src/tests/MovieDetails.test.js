import React from 'react';
import {mount} from 'enzyme';
import MovieDetails from '../components/MovieDetails'

import moviesList from '../../public/moviesList.json'

describe('MovieDetails component', () => {

    test('snapshot test', () => {
        const wrapper = mount(<MovieDetails mock={moviesList} />);
        expect(wrapper).toMatchSnapshot();
      });

    test('should render movie details component', () => {
        const wrapper = mount(<MovieDetails mock={moviesList} />);
        expect(wrapper.find('card').exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('Movie Details Page');
      });
});
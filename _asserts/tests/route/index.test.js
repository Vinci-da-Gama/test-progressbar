import React from 'react';
import { shallow } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';

import Route from '../../src/route';

describe('In route/index.js Test Routes: ', () => {
    let shallowWrapper;
    beforeEach(() => {
        shallowWrapper = shallow(<Route />);
    });

    it('should render route correctlly.', () => {
        expect(shallowWrapper).toMatchSnapshot();
    });
});

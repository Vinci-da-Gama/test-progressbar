import React from 'react';
import { shallow } from 'enzyme';

import RootReducer from '../../src/reduxers';

describe('In reduxers/index.js Test RootRedux: ', () => {
    it('should generate Root Reducer correctly.', () => {
        const wrapper = shallow(<RootReducer />);
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../src/components/spinner';

describe('In components/spinner.js Test Spinner: ', () => {
    it('should render spinner correctly.', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});

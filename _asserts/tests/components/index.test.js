import React from 'react';
import { shallow } from 'enzyme';

import IncexCompo from '../../src/components/index';

describe('In components/index.js Test Index: ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<IncexCompo />);
    });
    it('should render index component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

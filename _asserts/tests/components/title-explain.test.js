import React from 'react';
import { shallow } from 'enzyme';

import TitleExplain from '../../src/components/title-explain';

describe('In components/title-explain.js Test Title-Explain: ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TitleExplain />);
    });

    it('should render component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
import React from 'react';
import { shallow } from 'enzyme';

import { Progressbars } from '../../src/components/Progressbars';
import barsArr from '../fixtures/barsArr-fixtures';
import { RedBarArr } from '../fixtures/singleBarItem-fixture';

describe('In components/Progressbars.js Test Progressbar: ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Progressbars bars={ barsArr } limit={ 160 } />);
    });

    it('should render component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should be changed to danger when over limit.', () => {
        const wrapperWithRedBar = shallow(<Progressbars bars={ RedBarArr } limit={ 160 } />);
        const thePb = wrapperWithRedBar.find('Progress');
        expect(thePb.prop('color')).toBe('danger');
    });
});

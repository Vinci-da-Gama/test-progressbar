import React from 'react';
import { shallow } from 'enzyme';

import ButtonList from '../../src/components/Button-list';
import pbsFixture from '../fixtures/pbs-fixtures';

describe('In components/Button-list.js Test Button-List: ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ButtonList hasChoosen={ '' }
            btns={ pbsFixture.buttons } />);
    });

    it('should redner component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should selected first progressbar.', () => {
        wrapper.setProps({ hasChoosen: 'pb1' });
        const firstPb = wrapper.find('ButtonsContainer').at(0);
        expect(firstPb.prop('hasSelectedPb')).toBe('pb1');
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import ProgressbarSelector from '../../src/components/Progressbar-selector';
import barsArr from '../fixtures/barsArr-fixtures';

describe('In components/Progressbar-selector.js Test Selector: ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProgressbarSelector hasSelectedPb={ barsArr[0].pbId } bars={ barsArr } />);
    });

    it('should render Progressbar-selector correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

import React from 'react';
import { shallow } from 'enzyme';

import ProgressbarSelector from '../../src/components/Progressbar-selector';
import barsArr from '../fixtures/barsArr-fixtures';

describe('In components/Progressbar-selector.js Test Selector: ', () => {
    let wrapper, noBarSelectedWrapper, selectPbSpy;

    beforeEach(() => {
        selectPbSpy = jest.fn();
        wrapper = shallow(<ProgressbarSelector hasSelectedPb={ barsArr[0].pbId } bars={ barsArr } selectPbById={ selectPbSpy } />);
        noBarSelectedWrapper = shallow(<ProgressbarSelector hasSelectedPb={ '' } bars={ barsArr } />);
    });

    it('should render Progressbar-selector correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should not disabled Please Select Option.', () => {
        const disabledVal = noBarSelectedWrapper.find('option[value="default"]').prop('disabled');
        expect(disabledVal).toBeFalsy();
    });

    it('should set first option with test: Please Select.', () => {
        const optText = noBarSelectedWrapper.find('option[value="default"]').text();
        expect(optText).toBe('Please Select');
    });

    it('should choose progressbar.', () => {
        const value = barsArr[0].pbId;
        wrapper.find('#progressbAs-select0').simulate('change', {
            target: { value }
        });
        expect(selectPbSpy).toHaveBeenCalled();
        expect(selectPbSpy).toMatchSnapshot();
    });

});

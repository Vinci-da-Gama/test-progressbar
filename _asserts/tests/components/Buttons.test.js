import React from 'react'
import { shallow } from 'enzyme';

import ButtonsCompo from '../../src/components/Buttons';
import pbsFixture from '../fixtures/pbs-fixtures';

describe('In components/Buttons.js Test Buttons: ', () => {
    let wrapperWithData, fixt;
    beforeEach(() => {
        fixt = pbsFixture;
        wrapperWithData = shallow(<ButtonsCompo elem={pbsFixture.buttons[0]} />);
    });

    it('should render Buttons correctly without data.', () => {
        const wrapper = shallow(<ButtonsCompo />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Buttons correctly with data.', () => {
        expect(wrapperWithData).toMatchSnapshot();
    });

    it('should update bar value.', () => {
        const f1 = fixt.buttons[1];
        const updateBarSpy = jest.fn();
        const wrapperWithSpy = shallow(<ButtonsCompo elem={f1} updateBarVal={updateBarSpy} />);
        const oneBtn = wrapperWithSpy.dive().find('button').hostNodes();
        oneBtn.simulate('click', { target: { f1 } });
        expect(updateBarSpy).toHaveBeenCalled();
        expect(updateBarSpy).toHaveBeenLastCalledWith(f1);
    });

});

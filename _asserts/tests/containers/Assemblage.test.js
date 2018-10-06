import React from 'react';
import {
	shallow
} from 'enzyme';
import configureMockStore from 'redux-mock-store';

import {
	Assemblage
} from '../../src/containers/Assemblage';
import { origState } from '../fixtures/initState-fixture';

describe('In containers/Assemblage.js Test Assemblage: ', () => {
    let wrapper, getPbsSpy;
    beforeEach(() => {
        getPbsSpy = jest.fn();
        wrapper = shallow( <Assemblage getPbs = { getPbsSpy } /> );
    });

    it('should render component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should set default state.', () => {
        const defState = wrapper.state();
        expect(defState).toEqual(origState);
    });
});

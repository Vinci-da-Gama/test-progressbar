import React from 'react';
import { shallow } from 'enzyme';

import { PbOpts } from '../../src/components/Progressbar-Opts';
import { SingleBarObj } from '../fixtures/singleBarItem-fixture';

describe('In components/Progressbar-Opts.js Test DropDown Options: ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PbOpts value={ SingleBarObj.pbId } />);
    });

    it('should render options correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

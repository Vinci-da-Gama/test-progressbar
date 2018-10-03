import pbsFixture from '../fixtures/pbs-fixtures.';
import { FETCH_PROGRESSBARS } from '../../src/types';
import pbsReducer from '../../src/reduxers/reducer_progressbars';

describe('In reduxers/reducer_progressbars.js -- Test reducdr: ', () => {
    let pbs;
    beforeEach(() => {
        pbs = pbsFixture;
    });

    it('should return default value.', () => {
        const rz = pbsReducer(undefined, { type: '@@INIT' });
        expect(rz).toEqual({});
    });

    it('should return data same as fixture.', () => {
        const action = {
            type: FETCH_PROGRESSBARS,
            pbs
        };
        const rz = pbsReducer(pbs, action);
        expect(rz).toEqual(pbs);
    });

});

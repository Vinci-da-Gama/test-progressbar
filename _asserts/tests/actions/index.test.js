import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import mockAxios from 'jest-mock-axios';

import pbsFixture from '../fixtures/pbs-fixtures';
import { FETCH_PROGRESSBARS } from '../../src/types';
import * as pbsActions from '../../src/actions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// all will has 2s delay -- usually don't use. Below 2 items are for axios-mock-adapter.
/* const axiosMock = new MockAdapter(axios, { delayResponse: 2000 });
const axiosMock = new MockAdapter(axios); */

// fix redux-devtool-extension later...
describe('In actions/index.js -- Async actions: ', () => {
    let url, mStore, thenSpy, catchSpy;

    beforeEach(() => {
        mStore = mockStore({});
        mStore.clearActions();
        url = 'https://pb-api.herokuapp.com/bars';
        thenSpy = jest.fn();
        catchSpy = jest.fn();
    });
    afterEach(() => {
        /* axiosMock.reset();
        axiosMock.restore(); */
    });

    test('should generate initialize progressbars data result.', () => {
        const pbs = pbsFixture;
        const set_Pbs = pbsActions.setPbs(pbs);
        expect(set_Pbs).toEqual({
            type: FETCH_PROGRESSBARS,
            pbs
        });
    });

    it('should return result correctly via async call.', () => {
        /* axiosMock
            .onGet(url)
            .reply(1000, () => ({
                data: pbsFixture
            }));
        axios.get(url)
            .then((resp) => {
                console.log('47 -- ', resp);
            }); */
        return mStore.dispatch(pbsActions.getPbs())
            .then(() => {
                const rz = mStore.getActions();
                expect(rz[0]).toEqual({
                    type: FETCH_PROGRESSBARS,
                    pbs: {
                        buttons: expect.any(Array),
                        bars: expect.any(Array),
                        limit: expect.any(Number)
                    }
                });
            });
        expect(catchSpy).not.toHaveBeenCalled();
    });
});

import { FETCH_PROGRESSBARS } from '../../src/types';
import { pbsType } from '../fixtures/static-fixture';

describe('In types/index.js Type Definition: ', () => {
    it('should has defnied type for action.', () => {
        expect(FETCH_PROGRESSBARS).toBe(pbsType);
    });
});

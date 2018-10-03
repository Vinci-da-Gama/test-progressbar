import { ConstNumbers } from '../../src/consts/Numbers';
import { constNums } from '../fixtures/static-fixture';

describe('In consts/Number.js Numbers Definition: ', () => {
    it('should defined Numbers.', () => {
        expect(ConstNumbers).toEqual(constNums);
    });
});

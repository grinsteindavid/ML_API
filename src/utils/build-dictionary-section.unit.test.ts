import { datasource } from '../mocks/datasource.json';
import { DICTIONARY } from '../constants/dicctionary';
import { buildDictionarySection } from './build-dictionary-section';

describe('utils', () => {
    describe('buildDictionarySection', () => {
        it('should build a set of values with increment integer values', () => {
            const section = (DICTIONARY['city'] = buildDictionarySection(
                datasource.map((item) => item.input.city)
            ));

            expect(section).toStrictEqual({
                Miami: 1,
                Jacksonville: 2,
                'Los Angeles': 3,
            });
        });
    });
});

import { datasource } from '../mocks/datasource.json';
import { DICTIONARY } from '../constants/dicctionary';
import { normalizeByMinMax, normalize } from './normalize';
import { buildDictionarySection } from './build-dictionary-section';

describe('utils', () => {
    beforeAll(() => {
        DICTIONARY['city'] = buildDictionarySection(
            datasource.map((item) => item.input.city)
        );
        DICTIONARY['country'] = buildDictionarySection(
            datasource.map((item) => item.input.country)
        );
        DICTIONARY['region'] = buildDictionarySection(
            datasource.map((item) => item.input.region)
        );
        DICTIONARY['os'] = buildDictionarySection(
            datasource.map((item) => item.input.os)
        );
    });
    describe('normalize', () => {
        it('should normalize a nn input with string keys and decimal values', () => {
            const result = normalize({
                city: 'Miami',
                region: 'Florida',
                country: 'United States',
                os: 'iPhone',
            });
            expect(result).toBe({
                city: 1,
                region: 1,
                country: 1,
                os: 1,
            });
        });
    });
    describe('normalizeByMinMax', () => {
        it('should ', () => {
            const result = normalizeByMinMax(DICTIONARY, {
                section: 'city',
                value: 'Miami',
            });
            expect(result).toBe(1);
        });
    });
});

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
                os: 'iOS',
            });
            expect(result).toStrictEqual({
                city: 0.3333333333333333,
                region: 0.5,
                country: 1,
                os: 0.5,
            });
        });
    });
    describe('normalizeByMinMax', () => {
        it('should get a normalized number value from city[Miami] key section', () => {
            const result = normalizeByMinMax(DICTIONARY, {
                section: 'city',
                value: 'Miami',
            });
            expect(result).toBe(0.3333333333333333);
        });
    });
});

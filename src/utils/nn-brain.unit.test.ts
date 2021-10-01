import { predictTraffic } from './nn-brain';
import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';
import { DICTIONARY } from '../constants/dicctionary';
import { normalizeByMinMax } from './normalize';
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
    describe('predictTraffic', () => {
        it('should predict input as greather than 0.8', () => {
            const net = new brain.NeuralNetwork();
            net.train(
                datasource.map((item) => {
                    return {
                        ...item,
                        input: {
                            city: normalizeByMinMax(DICTIONARY, {
                                section: 'city',
                                value: item.input.city,
                            }),
                            region: normalizeByMinMax(DICTIONARY, {
                                section: 'region',
                                value: item.input.region,
                            }),
                            country: normalizeByMinMax(DICTIONARY, {
                                section: 'country',
                                value: item.input.country,
                            }),
                            os: normalizeByMinMax(DICTIONARY, {
                                section: 'os',
                                value: item.input.os,
                            }),
                        },
                    };
                })
            );

            const result = predictTraffic(net, {
                city: 'Miami',
                region: 'Florida',
                country: 'United States',
                os: 'iOS',
            });
            expect(result).toBeGreaterThanOrEqual(0.8);
        });
        it('should predict input as lesser than 0.1', () => {
            const net = new brain.NeuralNetwork();
            net.train(
                datasource.map((item) => {
                    return {
                        ...item,
                        input: {
                            city: normalizeByMinMax(DICTIONARY, {
                                section: 'city',
                                value: item.input.city,
                            }),
                            region: normalizeByMinMax(DICTIONARY, {
                                section: 'region',
                                value: item.input.region,
                            }),
                            country: normalizeByMinMax(DICTIONARY, {
                                section: 'country',
                                value: item.input.country,
                            }),
                            os: normalizeByMinMax(DICTIONARY, {
                                section: 'os',
                                value: item.input.os,
                            }),
                        },
                    };
                })
            );

            const result = predictTraffic(net, {
                city: 'Miami',
                region: 'Florida',
                country: 'United States',
                os: 'Android',
            });
            expect(result).toBeLessThanOrEqual(0.1);
        });
    });
});

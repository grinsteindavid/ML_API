import { predictTraffic } from './nn-brain';
import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';
import { DICTIONARY } from '../constants/dicctionary';
import { buildDicctionarySection, normalizeByMinMax } from './normalize';

describe('utils predictTraffic', () => {
    it('should predict input as greather than 0.8', () => {
        DICTIONARY['city'] = buildDicctionarySection(
            datasource.map((item) => item.input.city)
        );
        DICTIONARY['country'] = buildDicctionarySection(
            datasource.map((item) => item.input.country)
        );
        DICTIONARY['region'] = buildDicctionarySection(
            datasource.map((item) => item.input.region)
        );
        DICTIONARY['os'] = buildDicctionarySection(
            datasource.map((item) => item.input.os)
        );

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
            city: '',
            region: '',
            country: '',
            os: '',
        });
        expect(result > 0.8).toBeTruthy();
    });
});

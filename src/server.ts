import listEndpoints from 'express-list-endpoints';
import app from './app';

import { datasource } from './mocks/datasource.json';
import brain from 'brain.js';
import { DICTIONARY } from './constants/dicctionary';
import { buildDicctionarySection } from './utils/normalize';

export const net = new brain.NeuralNetwork();

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

app.listen(3000, async () => {
    try {
        const result = net.train(
            datasource.map((item) => {
                return {
                    ...item,
                };
            })
        );
        console.log(`[Neural Network]`, result);
    } catch (error) {
        console.log(error);
    }
    console.log(listEndpoints(app));
    console.log(`HTTP Server port ${3000}`);
});

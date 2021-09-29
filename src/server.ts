import listEndpoints from 'express-list-endpoints';
import app from './app';

import { datasource } from './mocks/datasource.json';
import brain from 'brain.js';

export const net = new brain.NeuralNetwork();

app.listen(3000, async () => {
    try {
        const result = net.train(datasource);
        console.log(`[Neural Network]`, result);
    } catch (error) {
        console.log(error);
    }
    console.log(listEndpoints(app));
    console.log(`HTTP Server port ${3000}`);
});

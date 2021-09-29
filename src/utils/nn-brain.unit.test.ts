import { predictTraffic } from './nn-brain';
import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';

describe('utils predictTraffic', () => {
    it('should predict input as greather than 0.8', () => {
        const net = new brain.NeuralNetwork();
        net.train(datasource);

        const result = predictTraffic(net, {
            city: 0.1,
            region: 0.1,
            country: 0.1,
            device: 0.1,
        });
        expect(result > 0.8).toBeTruthy();
    });
});

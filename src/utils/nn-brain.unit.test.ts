import { predictTraffic, stringToBinary } from './nn-brain';
import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';

describe('utils', () => {
    describe('predictTraffic', () => {
        it('should predict input as greather than 0.8', () => {
            const net = new brain.NeuralNetwork();
            net.train(datasource);

            const result = predictTraffic(net, {
                city: 'Miami',
                region: 'Florida',
                country: 'United States',
                device: 'iPhone',
            });
            expect(result > 0.8).toBeTruthy();
        });
    });

    describe('stringToBinary', () => {
        it('should convert string to binary', () => {
            const result = stringToBinary('Miami');

            expect(result).toBe([
                [1, 0, 0, 1, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1],
                [1, 1, 0, 1, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 1],
            ]);
        });
    });
});

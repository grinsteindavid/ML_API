import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';

export const predictTraffic = (input: {
    city: number;
    region: number;
    country: number;
    device: number;
}): number[] => {
    const net = new brain.NeuralNetwork();
    net.train(datasource);

    return net.run(input);
};

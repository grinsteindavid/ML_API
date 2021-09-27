import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';
import { nnInput } from '../types/nn-input';

export const predictTraffic = (input: nnInput): number[] => {
    const net = new brain.NeuralNetwork();
    net.train(datasource);

    return net.run(input);
};

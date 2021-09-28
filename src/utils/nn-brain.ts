import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js';
import { NNInput } from '../types/nn-input';

export const predictTraffic = (input: NNInput): number[] => {
    const net = new brain.NeuralNetwork();
    net.train(datasource);

    return net.run(input);
};

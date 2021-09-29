import { NeuralNetwork } from 'brain.js';
import { NNInput } from '../types/nn-input';

export const predictTraffic = (net: NeuralNetwork, input: NNInput): number => {
    const result = net.run<NNInput, number[]>(input);

    return result ? result[0] : 0;
};

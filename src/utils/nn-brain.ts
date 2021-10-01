import { NeuralNetwork } from 'brain.js';
import { NNParameter } from '../types/nn-parameter';
import { NNNormalizedInput } from '../types/nn-normalized-input';
import { normalize } from './normalize';

export const predictTraffic = (
    net: NeuralNetwork,
    input: NNParameter
): number => {
    const result = net.run<NNNormalizedInput, number[]>(normalize(input));

    return result[0];
};

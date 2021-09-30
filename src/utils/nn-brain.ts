import { NeuralNetwork } from 'brain.js';
import { NNInput } from '../types/nn-input';
import { NNModel } from '../types/nn-model';

export const stringToBinary = (text: string): number[][] => {
    const conversion: number[][] = [];
    text.split('').forEach((word) => {
        const binary = word.charCodeAt(0).toString(2);
        const dataset: number[] = [];
        binary.split('').forEach((data) => {
            dataset.push(Number(data));
        });

        conversion.push(dataset);
    });

    return conversion;
};
export const predictTraffic = (net: NeuralNetwork, input: NNInput): number => {
    const result = net.run<NNModel, number[]>({
        city: stringToBinary(input.city),
        region: stringToBinary(input.region),
        country: stringToBinary(input.country),
        device: stringToBinary(input.device),
    });

    return result[0];
};

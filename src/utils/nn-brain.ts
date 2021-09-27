import { datasource } from '../mocks/datasource.json';
import brain from 'brain.js/src/index';

export const predictTraffic = (input: {
    city: number;
    region: number;
    country: number;
    device: number;
}) => {
    const net = new brain.NeuralNetwork();
    net.train(datasource);

    return net.run(input);
};

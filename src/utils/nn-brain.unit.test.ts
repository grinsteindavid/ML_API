import { predictTraffic } from './nn-brain';

describe('utils predictTraffic', () => {
    it('should predict input as greather than 0.9', () => {
        const result = predictTraffic({
            city: 0.1,
            region: 0.1,
            country: 0.1,
            device: 0.1,
        });
        expect(result[0] > 0.9).toBeTruthy();
    });
});

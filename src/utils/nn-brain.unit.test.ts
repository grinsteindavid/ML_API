const { predictTraffic } = require('./nn-brain');

describe('utils predictTraffic', () => {
    it('should predict input as 1', () => {
        const result = predictTraffic({
            city: 0.1,
            region: 0.1,
            country: 0.1,
            device: 0.1,
        });
        expect(result).toBe(1);
    });
});

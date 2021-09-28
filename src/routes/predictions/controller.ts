import { Request, Response } from 'express';
import { nnInput } from '../../types/nn-input';
import { predictTraffic } from '../../utils/nn-brain';

export const predict = async (
    req: Request<any, any, { input: nnInput }>,
    res: Response
) => {
    const { input } = req.body;

    const result = predictTraffic(input);
    res.status(200).json({ result: result[0] });
};
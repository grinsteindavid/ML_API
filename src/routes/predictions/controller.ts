import { Request, Response } from 'express';
import { RequestBody } from '../../types/request-body';
import { predictTraffic } from '../../utils/nn-brain';

export const predict = async (
    req: Request<any, any, RequestBody>,
    res: Response
) => {
    const { input } = req.body;

    const result = predictTraffic(input);
    res.status(200).json({ result: result[0] });
};
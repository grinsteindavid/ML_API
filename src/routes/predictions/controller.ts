import { Request, Response } from 'express';
import { net } from '../../server';
import { RequestBody } from '../../types/request-body';
import { predictTraffic } from '../../utils/nn-brain';

export const predict = async (
    req: Request<any, any, RequestBody>,
    res: Response
) => {
    const { input } = req.body;

    const result = predictTraffic(net, input);
    res.status(200).json({ result });
};

export const getModel = async (req: Request, res: Response) => {
    const response = { model: net.toJSON() };
    res.status(200).json(response);
};
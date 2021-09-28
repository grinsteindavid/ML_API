import Joi from 'joi';
import { nnInput } from '../../types/nn-input';

export const Body = Joi.object<{ input: any }>().keys({
    input: Joi.object<nnInput>()
        .keys({
            city: Joi.number().min(0).max(1),
            region: Joi.number().min(0).max(1),
            country: Joi.number().min(0).max(1),
            device: Joi.number().min(0).max(1),
        })
        .required(),
});

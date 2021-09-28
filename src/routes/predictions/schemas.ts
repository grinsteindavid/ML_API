import Joi from 'joi';
import { nnInput } from '../../types/nn-input';
import { RequestBody } from '../../types/request-body';

export const Body = Joi.object<RequestBody>().keys({
    input: Joi.object<nnInput>()
        .keys({
            city: Joi.number().min(0).max(1),
            region: Joi.number().min(0).max(1),
            country: Joi.number().min(0).max(1),
            device: Joi.number().min(0).max(1),
        })
        .required(),
});

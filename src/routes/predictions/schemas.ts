import Joi from 'joi';
import { RequestBody } from '../../types/request-body';

export const Body = Joi.object<RequestBody>().keys({
    input: Joi.object<RequestBody['input']>()
        .keys({
            city: Joi.string().required(),
            region: Joi.string().required(),
            country: Joi.string().required(),
            os: Joi.string().required(),
        })
        .required(),
});

import Joi from 'joi';
import { NNInput } from '../../types/nn-input';
import { RequestBody } from '../../types/request-body';

export const Body = Joi.object<RequestBody>().keys({
    input: Joi.object<NNInput>()
        .keys({
            city: Joi.string().required(),
            region: Joi.string().required(),
            country: Joi.string().required(),
            device: Joi.string().required(),
        })
        .required(),
});

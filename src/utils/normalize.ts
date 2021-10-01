import { diccionary } from '../constants/dicctionary';
import { NNDictionary, NNDictionaryKeys } from '../types/nn-dictionary';
import { NNNormalizedInput } from '../types/nn-normalized-input';
import { NNParameter } from '../types/nn-parameter';

export const normalize = (input: NNParameter): NNNormalizedInput => {
    return {
        city: parseParameter(diccionary, { key: 'city', value: input['city'] }),
        country: parseParameter(diccionary, {
            key: 'country',
            value: input['country'],
        }),
        region: parseParameter(diccionary, {
            key: 'region',
            value: input['region'],
        }),
        os: parseParameter(diccionary, {
            key: 'os',
            value: input['os'],
        }),
    };
};

export const parseParameter = (
    diccionary: NNDictionary,
    parameter: { key: NNDictionaryKeys; value: string }
): number => {
    let value = 0;
    if (diccionary[parameter.key][parameter.value] !== undefined) {
        value = diccionary[parameter.key][parameter.value];
    }

    return value;
};

export const buildDicctionary = (
    diccionary: NNDictionary,
    parameter: NNParameter
): number => {
    let value = 0;

    return value;
};

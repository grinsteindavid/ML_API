import { DICTIONARY } from '../constants/dicctionary';
import { NNDictionary, NNDictionaryKeys } from '../types/nn-dictionary';
import { NNNormalizedInput } from '../types/nn-normalized-input';
import { NNParameter } from '../types/nn-parameter';

export const normalize = (input: NNParameter): NNNormalizedInput => {
    return {
        city: parseParameter(DICTIONARY, { key: 'city', value: input['city'] }),
        country: parseParameter(DICTIONARY, {
            key: 'country',
            value: input['country'],
        }),
        region: parseParameter(DICTIONARY, {
            key: 'region',
            value: input['region'],
        }),
        os: parseParameter(DICTIONARY, {
            key: 'os',
            value: input['os'],
        }),
    };
};

export const parseParameter = (
    dictionary: NNDictionary,
    parameter: { key: NNDictionaryKeys; value: string }
): number => {
    let value = 0;
    if (dictionary[parameter.key][parameter.value] !== undefined) {
        value = dictionary[parameter.key][parameter.value];
    }

    return value;
};

export const buildDicctionarySection = (
    values: string[]
): { [key: string]: number } => {
    const section: { [key: string]: number } = {};

    [...new Set(values)].forEach((value) => {
        if (section[value] === undefined) {
            section[value] = Object.keys(section).length + 1;
        }
    });

    return section;
};

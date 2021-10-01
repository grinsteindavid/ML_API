import { DICTIONARY } from '../constants/dicctionary';
import { NNDictionary, NNDictionaryKeys } from '../types/nn-dictionary';
import { NNNormalizedInput } from '../types/nn-normalized-input';
import { NNParameter } from '../types/nn-parameter';

export const normalize = (input: NNParameter): NNNormalizedInput => {
    return {
        city: normalizeByMinMax(DICTIONARY, {
            section: 'city',
            value: input['city'],
        }),
        country: normalizeByMinMax(DICTIONARY, {
            section: 'country',
            value: input['country'],
        }),
        region: normalizeByMinMax(DICTIONARY, {
            section: 'region',
            value: input['region'],
        }),
        os: normalizeByMinMax(DICTIONARY, {
            section: 'os',
            value: input['os'],
        }),
    };
};

export const normalizeByMinMax = (
    dictionary: NNDictionary,
    parameter: { section: NNDictionaryKeys; value: string }
): number => {
    let value = 0;
    if (dictionary[parameter.section][parameter.value] !== undefined) {
        value =
            dictionary[parameter.section][parameter.value] /
            (Object.keys(dictionary[parameter.section]).length + 1);
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

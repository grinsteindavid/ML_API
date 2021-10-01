import { NNDictionaryKeys } from './nn-dictionary';

export type NNNormalizedInput = {
    [key in NNDictionaryKeys]: number;
};

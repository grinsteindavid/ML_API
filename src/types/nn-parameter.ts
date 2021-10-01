import { NNDictionaryKeys } from './nn-dictionary';

export type NNParameter = {
    [key in NNDictionaryKeys]: string;
};

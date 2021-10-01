export type NNDictionary = {
    [key in NNDictionaryKeys]: { [key: string]: number };
};

export type NNDictionaryKeys = 'city' | 'region' | 'country' | 'os';

export const buildDictionarySection = (
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

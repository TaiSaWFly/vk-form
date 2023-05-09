import { SelectOption } from "../ts/types/formFieldTypes/SelectOption";

export const generateSelectOption = (
    initialValue: number,
    finalValue: number,
    prefix: string
): SelectOption[] => {
    const arr = [];

    for (let i = initialValue; i <= finalValue; i++) {
        arr.push({ value: String(i), label: `${i} ${prefix}` });
    }

    return arr;
};

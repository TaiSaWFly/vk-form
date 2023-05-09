import { SelectOption } from "../ts/types/formFieldTypes/SelectOption";
import { generateSelectOption } from "../utils/generateSelectOption";

export const buildingOptions: SelectOption[] = [
    { value: "building-A", label: "A" },
    { value: "building-B", label: "B" }
];
export const floorOptions = generateSelectOption(3, 27, "floor");
export const roomOptions = generateSelectOption(1, 10, "room");

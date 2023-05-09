import React from "react";
import Select, { SingleValue } from "react-select";
import style from "./selectField.module.scss";
import { FormChangeArgs } from "../../../../../ts/types/globalTypes/FormChangeArgs";
import { SelectOption } from "../../../../../ts/types/formFieldTypes/SelectOption";

interface SelectFieldProps {
    label?: string;
    name: string;
    options: any;
    value: SelectOption | null;
    placeholder: string;
    onChange: (target: FormChangeArgs<string, SelectOption>) => void;
    error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    name,
    options,
    value,
    placeholder,
    onChange,
    error
}) => {
    const handleChange = (value: SingleValue<SelectOption>) => {
        onChange({ name: name, value: value });
    };

    return (
        <div className={style.select_field}>
            {label && <label>{label}</label>}

            <Select
                name={name}
                options={options}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                isClearable={true}
                maxMenuHeight={190}
            />

            {error && (
                <span className={style.select_field__error}>{error}</span>
            )}
        </div>
    );
};

export default React.memo(SelectField);

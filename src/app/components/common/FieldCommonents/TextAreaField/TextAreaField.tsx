import React from "react";
import style from "./textAreaField.module.scss";
import { FormChangeArgs } from "../../../../../ts/types/globalTypes/FormChangeArgs";

interface TextAreaFieldProps {
    name: string;
    label: string;
    value: string;
    error: string;
    onChange: (target: FormChangeArgs<string, string>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    name,
    label,
    value,
    onChange,
    error
}) => {
    const handleChange = ({
        target
    }: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className={style.text_area__field}>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            />

            {error && <span className={style.text_area__error}>{error}</span>}
        </div>
    );
};

export default React.memo(TextAreaField);

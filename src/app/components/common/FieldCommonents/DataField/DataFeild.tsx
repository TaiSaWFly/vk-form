import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./dataField.module.scss";
import { FormChangeArgs } from "../../../../../ts/types/globalTypes/FormChangeArgs";

interface DataFieldProps {
    label: string;
    name: string;
    value: Date | null;
    placeholder: string;
    error: string;
    onChange: (target: FormChangeArgs<string, Date>) => void;
}

const DataField: React.FC<DataFieldProps> = ({
    label,
    name,
    value,
    onChange,
    error,
    placeholder
}) => {
    const handleChange = (date: Date | null) => {
        onChange({ name: name, value: date });
    };
    return (
        <div className={style.data_field}>
            <div className={style.data_field__label}>{label}</div>

            <DatePicker
                className={style.data_field__pic}
                placeholderText={placeholder}
                selected={value}
                onChange={handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
            />

            {error && <span className={style.data_field__error}>{error}</span>}
        </div>
    );
};

export default React.memo(DataField);

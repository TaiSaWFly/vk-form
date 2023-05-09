import React, { useState, useEffect, useCallback } from "react";
import style from "./meetingRoomForm.module.scss";
import SelectField from "../../common/FieldCommonents/SelectField/SelectField";
import { FormChangeArgs } from "../../../../ts/types/globalTypes/FormChangeArgs";
import { SelectOption } from "../../../../ts/types/formFieldTypes/SelectOption";
import DataField from "../../common/FieldCommonents/DataField/DataFeild";
import TextAreaField from "../../common/FieldCommonents/TextAreaField/TextAreaField";
import Button from "../../common/Button";
import { meetingRoomSchema } from "../../../../utils/yupSchema";
import { KeyableTypes } from "../../../../ts/types/globalTypes/KeyableTypes";
import {
    buildingOptions,
    floorOptions,
    roomOptions
} from "../../../../data/options";

interface IDataFormMeetingRoom {
    building: SelectOption | null;
    floor: SelectOption | null;
    room: SelectOption | null;
    date: Date | null;
    content: string;
}

const initialState: IDataFormMeetingRoom = {
    building: null,
    floor: null,
    room: null,
    date: null,
    content: ""
};

const MeetingRoomForm: React.FC = () => {
    const [data, setData] = useState<IDataFormMeetingRoom>(initialState);
    const [error, setError] = useState<KeyableTypes<string>>({});

    useEffect(() => {
        validate();
    }, [data]);

    const validate = (): boolean => {
        meetingRoomSchema
            .validate(data)
            .then(() => setError({}))
            .catch((error) => setError({ [error.path]: error.message }));
        return Object.keys(error).length === 0;
    };

    const handleChange = useCallback(
        (
            target: FormChangeArgs<string, string | Date | SelectOption>
        ): void => {
            setData((prevStare) => ({
                ...prevStare,
                [target.name]: target.value
            }));
        },
        []
    );

    const isValid: boolean = Object.keys(error).length === 0;

    const handleClearForm = (): void => {
        setData(initialState);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const jsonResponseData = JSON.stringify({
            building: data.building?.label,
            floor: data.floor?.label,
            room: data.floor?.label,
            date: data.date,
            content: data.content
        });

        console.log(jsonResponseData);
    };

    return (
        <div className={style.meeting_room_form}>
            <div className={style.form_title}>Meeting Room</div>

            <form onSubmit={handleSubmit}>
                <div className={style.form_field}>
                    <SelectField
                        label="building"
                        name="building"
                        options={buildingOptions}
                        value={data.building}
                        placeholder="Choose building"
                        onChange={handleChange}
                        error={error.building}
                    />
                </div>

                <div className={style.form_field}>
                    <SelectField
                        label="floor"
                        name="floor"
                        options={floorOptions}
                        value={data.floor}
                        placeholder="Choose floor"
                        onChange={handleChange}
                        error={error.floor}
                    />
                </div>

                <div className={style.form_field}>
                    <SelectField
                        label="room"
                        name="room"
                        options={roomOptions}
                        value={data.room}
                        placeholder="Choose room"
                        onChange={handleChange}
                        error={error.room}
                    />
                </div>

                <div className={style.form_field}>
                    <DataField
                        label="Meeting date"
                        name="date"
                        value={data.date}
                        onChange={handleChange}
                        placeholder="Select meeting date"
                        error={error.date}
                    />
                </div>

                <div className={style.form_field}>
                    <TextAreaField
                        name="content"
                        label="Your Comment"
                        value={data.content}
                        onChange={handleChange}
                        error={error.content}
                    />
                </div>

                <div className={style.form_actions}>
                    <Button isDisabled={!isValid}>Send</Button>
                    <Button onClick={handleClearForm}>Clear Form</Button>
                </div>
            </form>
        </div>
    );
};

export default MeetingRoomForm;

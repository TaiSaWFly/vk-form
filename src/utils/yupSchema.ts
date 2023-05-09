import * as yup from "yup";

export const meetingRoomSchema = yup.object().shape({
    content: yup
        .string()
        .required("The field is required to fill")
        .min(10, "Please write a comment at least 10 characters"),
    date: yup.date().nullable().required("The field is required to fill"),
    room: yup.object().nullable().required("The field is required to fill"),
    floor: yup.object().nullable().required("The field is required to fill"),
    building: yup.object().nullable().required("The field is required to fill")
});

export const required = (value) => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value) {
        if (value.length > maxLength) return `Max length ${maxLength} symbols`;
    }

    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value) {
        if (value.length < minLength) return `Min length ${minLength} symbols`;
    }
    return undefined;
}
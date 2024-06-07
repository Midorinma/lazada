export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    return passwordRegex.test(password);
};

export const validateName = (name) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    return nameRegex.test(name);
};

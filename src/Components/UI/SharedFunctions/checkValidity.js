
export const checkValidity = (value, name) => {

    const rules = {
        userName: { required: true, minLength: 3, pattern: /^([^0-9]*)$/ },
        userSurname: { required: true, minLength: 3, pattern: /^([^0-9]*)$/ },
        userTelephoneNumber: { pattern: /^\d+$/, minLength: 6 },
        signUpEmail: { pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ },
        signUpPassword: { pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ },
        signInEmail: { pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ },
        signInPassword: { pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ },
    };

    let isValid = true;

    if (rules[name].required) {
        isValid = value !== '' && isValid
    };
    if (rules[name].minLength) {
        isValid = value.length >= rules[name].minLength && isValid
    };
    if (rules[name].pattern) {
        isValid = rules[name].pattern.test(value) && isValid
    };


    return isValid;
};
// Function that collects password validation error messages into an array and returns them.
export function validatePass (password) {
    let errors = [];

    if(!password) {
        errors.push("Password is required!");
    }

    if (password.length < 8 || password.length >= 15) {
        errors.push("Password must be of a specific length (at least 8 chars and less than 15 chars)");
    }

    if(!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase alphabet character");
    }

    if ((password.match(/[a-z]/g) || []).length < 2 ) {
        errors.push("Password must include at least two lowercase alphabet characters.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one numeric value");
    }

    if (!/^[A-Z]/.test(password)) {
        errors.push("Password must start with an uppercase alphabet character");
    }

    if (!/_/.test(password)) {
        errors.push("Password must include the character '_'")
    }

    return errors;
}
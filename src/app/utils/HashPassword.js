import crypto from "node:crypto";

function hashPassword(password, salt) {
    const hashedPassword = crypto
        .pbkdf2Sync(
            toString(password),
            toString(salt),
            10000,
            64,
            'sha512')
        .toString('hex');

    return hashedPassword
}

export { hashPassword }
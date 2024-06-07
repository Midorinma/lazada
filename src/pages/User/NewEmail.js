function maskEmail(email) {
    const atIndex = email.indexOf('@');

    // Nếu không tìm thấy @, trả về email ban đầu
    if (atIndex === -1) {
        return email;
    }

    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex);

    const firstCharacter = username[1];

    const newUsername = firstCharacter + '*'.repeat(username.length - 1);

    const newEmail = username[0] + newUsername + domain;

    return newEmail;
}

export default maskEmail;

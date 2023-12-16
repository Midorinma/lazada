export const Post = async (url = '', data = {}, callback) => {
    var options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    };

    await fetch(url, options)
        .then((res) => res.json)
        .then(callback);
};

export const Patch = async (url = '', data = []) => {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    };
    await fetch(url, options)
        .then((response) => response.json())

        .catch((error) => console.error('Error:', error));
};

export const Post = async (url = ``, data = {}) => {
    var options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

export const Patch = async (url = ``, data = []) => {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

export const Get = async (url = ``) => {
    try {
        if (!url) {
            throw new Error('URL is required');
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

export const Del = async (id) => {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(
        `${process.env.REACT_APP_LOCALHOST}/User/${id}`,
        options,
    );
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

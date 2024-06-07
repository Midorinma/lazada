import React, { useState, useEffect } from 'react';
import Signup from './Signup';

function DataSignup() {
    const [user, setUser] = useState([]);
    const apiUrl = `${process.env.REACT_APP_LOCALHOST}/User`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setUser(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Signup data={user} />;
}

export default DataSignup;

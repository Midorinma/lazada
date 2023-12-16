import { useState, useEffect } from 'react';
import Login from './Login';

function Datalogin() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/User`)
            .then((res) => res.json())
            .then((res) => setState(res));
    }, []);

    return (
        <div>
            <Login data={state} />
        </div>
    );
}

export default Datalogin;

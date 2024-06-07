import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layout/DefaultLayout';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
    registerSuccess,
    logout,
} from '~/components/Store/actions/authActions';
import storage from '~/components/Store/reducers/storage';
import { STORAGE_KEY } from '~/components/Store/actions/types';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getuserArr = localStorage.getItem('useState');
        if (getuserArr === null) {
            dispatch(logout());
        } else {
            dispatch(registerSuccess(getuserArr));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const sessionTimeout = 5 * 60 * 1000;
        let timer;

        const resetSessionTimeout = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                localStorage.removeItem('useState');
                dispatch(logout());
                storage.delete(STORAGE_KEY);
            }, sessionTimeout);
        };

        const handleUserActivity = () => {
            resetSessionTimeout();
        };

        window.addEventListener('click', handleUserActivity);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', handleUserActivity);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        let Page = route.component;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

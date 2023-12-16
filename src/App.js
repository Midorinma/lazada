import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layout/DefaultLayout';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    registerSuccess,
    logout,
} from '~/components/Store/actions/authActions';

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

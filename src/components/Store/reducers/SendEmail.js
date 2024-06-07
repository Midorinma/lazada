import {
    postDataFailure,
    postDataRequest,
    postDataSuccess,
} from '../actions/authActions';

export const SendEmail = (temp) => {
    return async (dispatch) => {
        dispatch(postDataRequest());
        await fetch(`${process.env.REACT_APP_SEND_EMAIL}/email/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(temp),
        })
            .then((res) => {
                dispatch(postDataSuccess(res));
            })
            .catch((error) => {
                dispatch(postDataFailure(error.message));
            });
    };
};

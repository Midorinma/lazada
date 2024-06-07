import {
    patchDataRequest,
    patchDataSuccess,
    patchDataFailure,
} from '../actions/authActions';
import { Crud } from '~/components/Crud';

export const fetchData = (temp) => {
    return (dispatch) => {
        dispatch(patchDataRequest());
        const userAccount = localStorage.getItem('useState');
        if (userAccount === null) {
            return;
        }
        const cleanData = userAccount.slice(1, -1);
        Crud.Get(`${process.env.REACT_APP_LOCALHOST}/User`)
            .then((items) => {
                if (items && items.length > 0) {
                    const foundItem = items.find(
                        (item) => item.email === cleanData,
                    );
                    if (foundItem) {
                        Crud.Patch(
                            `${process.env.REACT_APP_LOCALHOST}/User/${foundItem.id}`,
                            temp,
                        )
                            .then((data) => {
                                dispatch(patchDataSuccess(data));
                            })
                            .catch((error) => {
                                dispatch(patchDataFailure(error.message));
                            });
                    }
                }
            })
            .catch((error) => {
                dispatch(patchDataFailure(error.message));
            });
    };
};

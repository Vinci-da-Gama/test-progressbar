import axios from 'axios';

import { FETCH_PROGRESSBARS } from '../types';

const rootUrl = 'http://pb-api.herokuapp.com';

export const setPbs = (pbs) => (
    {
        type: FETCH_PROGRESSBARS,
        pbs
    }
);

export const getPbs = () => {
    return (dispatch) => {
        return axios.get(`${rootUrl}/bars`)
        .then((resp) => {
            console.log('18 -- resp: ', resp);
            if (resp) {
                dispatch(setPbs(resp.data));
            } else {
                console.log('21 -- ', resp);
            }
        })
        .catch((err) => {
            console.log('25 -- ', err);
        });
    };
};

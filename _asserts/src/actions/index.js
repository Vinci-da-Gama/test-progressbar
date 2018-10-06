import axios from 'axios';

import { FETCH_PROGRESSBARS } from '../types';
import { ConstNumbers } from '../consts/Numbers';

const rootUrl = 'https://pb-api.herokuapp.com';


export const setPbs = (pbs = {}) => {
    if (Object.keys(pbs) !== ConstNumbers.ZERO) {
        pbs.bars = pbs.bars.map((elem, idx) => {
            return {
                pbId: `pb${idx + ConstNumbers.ONE}`,
                val: elem
            };
        });
    }
    return {
        type: FETCH_PROGRESSBARS,
        pbs
    };
};

export const getPbs = () => {
    return (dispatch) => {
        return axios.get(`${rootUrl}/bars`)
        .then((resp) => {
            if (resp) {
                dispatch(setPbs(resp.data));
            } else {
                alert('Please check Internet connection.');
            }
        })
        .catch((err) => {
            alert('There are some errors. Please contact Customer Service.', err);
        });
    };
};

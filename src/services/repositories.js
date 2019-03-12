import { types } from '../store/repositories'
import axios from 'axios';

export function getSelectedPeriod(state) {
    return {
        type: types.GET_SELECTED_PERIOD,
        state
    }
}

export function getSelectedLanguage(state) {
    return {
        type: types.GET_SELECTED_PERIOD,
        state
    }
}

export function receiveRepos(data) {
    return {
        type: types.GET_REPOSITORIES_LIST,
        payload: data
    }
}


export const fetchRepos =  (language, timePeriod) => {
    return async (dispatch) => {
        return  await axios.get(`https://github-trending-api.now.sh/repositories?language=${language}&since=${timePeriod}`)
            .then(response => {
                dispatch(receiveRepos(response))
            })
            .catch(error => {
            throw(error);
        });
    }
};

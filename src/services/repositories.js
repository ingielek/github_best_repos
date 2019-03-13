import {types} from '../store/repositories'
import axios from 'axios';

export const getSelectedPeriod = timePeriod => (dispatch, getState) => {
    dispatch ({
        type: types.GET_SELECTED_PERIOD,
        payload: {timePeriod}
    });

    fetchRepos(getState().repositories.language, timePeriod)
        .then(response => dispatch(receiveRepos(response)));
};

export const  getSelectedLanguage = (language) => (dispatch, getState) => {
    dispatch ({
        type: types.GET_SELECTED_LANGUAGE,
        payload: {language}
    });

    fetchRepos(language, getState().repositories.timePeriod)
        .then(response => dispatch(receiveRepos(response)));
};

export function receiveRepos (data) {
    return {
        type: types.GET_REPOSITORIES_LIST,
        payload: data
    }
}


export const fetchRepos = (language, timePeriod) => {
    return axios.get (`https://github-trending-api.now.sh/repositories?language=${language}&since=${timePeriod}`)
        .catch (error => {
            throw(error);
        });
};

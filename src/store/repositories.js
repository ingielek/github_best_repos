export const types = {
    GET_SELECTED_LANGUAGE: 'GET_SELECTED_LANGUAGE',
    GET_SELECTED_PERIOD: 'GET_SELECTED_PERIOD',
    GET_REPOSITORIES_LIST: 'GET_REPOSITORIES_LIST',
    GET_REPOSITORIES_LIST_SUCCEED: 'GET_REPOSITORIES_LIST_SUCCEED'
};

export default function repositories (
    state = {
        status: 'loading',
        language: 'javascript',
        timePeriod: null,
        data: []
    },
    action
) {
    switch ( action.type ) {
        case types.GET_SELECTED_LANGUAGE:
            return {
                ...state,
                language: action.payload.language
            };

        case types.GET_SELECTED_PERIOD:
            return {
                ...state,
                timePeriod: action.payload.timePeriod
            };

        case types.GET_REPOSITORIES_LIST:
            return {
                status: 'loading',
                ...state,
                data: action.payload
            };

        case types.GET_REPOSITORIES_LIST_SUCCEED :
            return {
                status: 'succeed'
            };

        default:
            return state;
    }
}
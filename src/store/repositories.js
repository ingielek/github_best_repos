export const types = {
    GET_SELECTED_LANGUAGE: 'GET_SELECTED_LANGUAGE',
    GET_SELECTED_PERIOD: 'GET_SELECTED_PERIOD',
    GET_REPOSITORIES_LIST: 'GET_REPOSITORIES_LIST'
};

export default function repositories (
    state = {
        status: false,
        language: 'daily',
        period: 'weekly',
        data: []
    },
    action
) {
    switch ( action.type ) {
        case types.GET_SELECTED_LANGUAGE:
            return {
                ...state.language
            };

        case types.GET_SELECTED_PERIOD:
            return {
                ...state.period
        };

        case types.GET_REPOSITORIES_LIST:
            return {
                status: false,
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
}
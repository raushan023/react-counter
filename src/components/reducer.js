const initialState = {
    count: 0
};

const counterReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case 'INC_COUNTER':
            return { count: data };
        case 'DEC_COUNTER':
            return { count: data };
        case 'RESET_COUNTER':
            return { count: data };
        default:
            return state;
    }
}

export default counterReducer;
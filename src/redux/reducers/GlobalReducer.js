let initialState = {
    totalOrder: 0,
    name: 'Niks'
};
// Reducer
export const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.newName,
            };
            break;
        case "CHANGE_ORDER":
            return {
                ...state,
                totalOrder: action.newValue,
            };
            break;
        case "PLUS_ORDER":
            return {
                ...state,
                totalOrder: state.totalOrder + 1,
            };
            break;
        case "MINUS_ORDER":
            let totalOrder = 0;
            if (state.totalOrder > 0) {
                totalOrder = state.totalOrder - 1;
            }
            return {
                ...state,
                totalOrder: totalOrder,
            };
            break;
        default:
            return state;
            break;
    }
};
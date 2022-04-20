import types from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

const uiReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload 
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case uiStarLoading: 
            return {
                ...state,
                loading: true
            }

        case uiFinishLoading: 
            return {
                ...state,
                loading: false
            }
    
        default:
            return state
    }
};

export default uiReducer;

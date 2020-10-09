import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_NEW_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions/index'

const initialState = {
    smurfs: [],
    isLoading: true,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'something'
            }
        case ADD_NEW_SMURF:
            return {
                ...state,
            }
        case ADD_SMURF_SUCCESS:
            const newSmurf = {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: Date.now(),
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                error: 'something'
            }
        default:
            return state
    }
}

export default reducer;
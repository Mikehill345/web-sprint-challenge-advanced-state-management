import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'


export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get(
        'http://localhost:3333/smurfs'
      )
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message })
      });
  };


  export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: ADD_NEW_SMURF });
    axios
      .post(
        'http://localhost:3333/smurfs', smurf
      )
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: ADD_SMURF_FAILURE, payload: err.message })
      });
  };
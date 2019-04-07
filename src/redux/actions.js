import { getPeople } from '../helpers/swApi';
import {
  LOCATION_CHANGE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_ERROR
} from './actionTypes';

function locationChange(location, action) {
  return {
    type: LOCATION_CHANGE,
    location,
    action
  };
}

function fetchPeople(id) {
  return dispatch => {
    getPeople(id)
      .then(data =>
        dispatch({
          type: id ? FETCH_PERSON_SUCCESS : FETCH_PEOPLE_SUCCESS,
          data
        })
      )
      .catch(err => {
        console.error(err);

        dispatch({
          type: id ? FETCH_PERSON_ERROR : FETCH_PEOPLE_ERROR,
          err
        });
      });
  };
}

export { locationChange, fetchPeople };

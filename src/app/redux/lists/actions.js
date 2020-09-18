import { fetchData } from "../../router/Civilizaciones";

const FETCH_LIST_REQUEST = "FETCH_LIST_REQUEST"; //solicitud
const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS"; //llegó
const FETCH_LIST_FAILURE = "FETCH_LIST_FAILURE"; //Fercho la cagó

export function getAllElements() {
  const request = {
    type: FETCH_LIST_REQUEST,
  };

  const failure = {
    type: FETCH_LIST_FAILURE,
  };

  const success = (data) => ({
    type: FETCH_LIST_SUCCESS,
    data: data,
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    return users.civilizations;
  };

  return async (dispatch) => {
    dispatch(request);
    const result = await fetchData();
    if (result != undefined) {
      dispatch(success(result));
    } else {
      dispatch(failure);
    }
  };
}

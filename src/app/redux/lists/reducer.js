const initialState = {
  all: [],
  loading: true,
};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LIST_REQUEST":
      return { ...state, loading: true };
    case "FETCH_LIST_SUCCESS":
      return {...state, all: action.data} 
    default:
      return state
  } // interpretar peticiones
}

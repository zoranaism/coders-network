import axios from "axios";

function fetchDevelopersSucces(data) {
  return { type: "FETCHED_DEVELOPERS_SUCCESS", payload: data };
}

export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/developers"
    );

    console.log(response);
    const action = fetchDevelopersSucces(response.data);
    dispatch(action);
  };
}

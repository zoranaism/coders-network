
import axios from "axios";

export function thunkExample() {
  return async function(dispatch, getState) {
    const reduxState = getState();
    console.log("WHAT IS IN THE STATE", reduxState);
    if (reduxState.posts.length === 0) {
      dispatch({ type: "I_AM_LOADING" });
      dispatch({ type: "SOMETHING HAPPENED" });
      dispatch({ type: "SOMETHING ELSE" });
      dispatch({ type: "I_AM_DONE" });
    } else {
      dispatch({ type: "WE_ALREADY_HAVE_WHAT_WE_NEED" });
    }
  };
}

function fetchPostsSucces(data) {
  return { type: "FETCHED_POSTS_SUCCESS", payload: data };
}

export function fetchPostsThunk() {
  return async function(dispatch, getState) {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/posts"
    );
    if (getState().posts.count === 0) {
      const action = fetchPostsSucces(response.data);
      dispatch(action);
    }
  };
}


function fetchPostSuccess(data) {
  return {
    type: "FETCH_POST_DETAILS_SUCCESS",
    payload: data
  };
}


export function fetchPostById(postId) {
  return async function(dispatch, getState) {
    const [postResponse, commentsReponse] = await Promise.all([
      axios.get(`https://codaisseur-coders-network.herokuapp.com/posts/${postId}`
      ),
      axios.get(
        `https://codaisseur-coders-network.herokuapp.com/posts/${postId}/comments`
      )
    ]);
    
    const data = { ...postResponse.data, comments: commentsReponse.data.rows };

    const action = fetchPostSuccess(data);
    console.log(action);
    dispatch(action);
  };
}
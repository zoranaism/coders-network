import { combineReducers } from "redux";
import posts from "./posts/reducer";
import developers from "./developers/reducer";
import postDetails from "./postDetails/reducer";

const reducer = combineReducers({
  posts: posts, 
  postDetails: postDetails,
  developers: developers
  // etc.
});
export default reducer;

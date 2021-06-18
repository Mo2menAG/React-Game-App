import { combineReducers } from "redux";
import gamesReucer from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReucer,
});

export default rootReducer;

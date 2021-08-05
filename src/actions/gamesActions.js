import axios from "axios";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchedGamesUrl,
} from "../api";

// action creator

export const loadGames = () => async (dispatch) => {
    //fetch axios
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            new: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (gameName) => async (dispatch) => {
    //fetch axios
    const searchedGamesData = await axios.get(searchedGamesUrl(gameName));
    console.log(searchedGamesUrl(gameName));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGamesData.data.results,
        },
    });
};

export const clearSearch = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_SEARCHED",
    });
};

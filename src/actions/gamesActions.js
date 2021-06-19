import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newrGamesURL } from "../api";

// action creator

export const loadGames = () => async (dispatch) => {
    //fetch axios
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newrGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            new: newGamesData.data.results,
        },
    });
};

import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

// action creator

export const loadDetails = (gameId) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAILS",
    });
    //fetch axios
    const gameDetailsData = await axios.get(gameDetailsUrl(gameId));
    const gameScreenshots = await axios.get(gameScreenshotsUrl(gameId));
    dispatch({
        type: "FETCH_DETAILS",
        payload: {
            details: gameDetailsData.data,
            screenshots: gameScreenshots.data,
        },
    });
};

export const exitDetails = (gameId) => async (dispatch) => {
    dispatch({
        type: "EXIT_DETAILS",
    });
};

const initState = {
    gameDetails: {},
    gameScreenshots: {},
    isLoading: true,
};

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DETAILS":
            return {
                ...state,
                gameDetails: action.payload.details,
                gameScreenshots: action.payload.screenshots,
                isLoading: false,
            };
        case "LOADING_DETAILS":
            return {
                ...state,
                isLoading: true,
            };
        case "EXIT_DETAILS":
            return {
                ...initState,
            };
        default:
            return { ...state };
    }
};

export default detailsReducer;

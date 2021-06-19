import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("hi");
        dispatch(loadGames());
    });
    return (
        <div className="App">
            <h1>Hi Ignite</h1>
        </div>
    );
}

export default App;

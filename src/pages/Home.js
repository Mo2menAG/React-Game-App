import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";

//components
import Game from "../components/Game";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    //fetch games
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("hi");
        dispatch(loadGames());
    }, [dispatch]);

    //get the data back
    const { popularGames, newGames, upcomingGames } = useSelector(
        (state) => state.games
    );
    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 4rem;
    h2 {
        padding: 3rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-row-gap: 4rem;
    grid-column-gap: 2.5rem;
`;

export default Home;

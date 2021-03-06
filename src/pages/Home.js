import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import GameDetails from "../components/GameDetails";

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
    const { popularGames, newGames, upcomingGames, searchedGames } =
        useSelector((state) => state.games);

    return (
        <GameList>
            {searchedGames.length ? (
                <div className="searched">
                    <h2>Searched Games</h2>
                    <Games>
                        <GameDetails />
                        {searchedGames.map((game) => (
                            <Game
                                name={game.name}
                                released={game.released}
                                key={game.id}
                                id={game.id}
                                image={game.background_image}
                            />
                        ))}
                    </Games>
                </div>
            ) : (
                ""
            )}
            <h2>Upcoming Games</h2>
            <Games>
                <GameDetails />
                {upcomingGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popularGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
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
    padding-bottom: 2.5rem;
`;

export default Home;

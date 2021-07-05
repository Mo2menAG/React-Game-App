import React from "react";
import { useHistory } from "react-router-dom";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";

//redux
import { useDispatch } from "react-redux";
import { exitDetails } from "../actions/detailsAction";

const GameDetails = () => {
    //exit details card
    const dispatch = useDispatch();
    const history = useHistory();
    const exitDetailsHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("card-shadow")) {
            dispatch(exitDetails());
            history.push("/");
            document.body.style.overflow = "auto";
        }
    };
    //data
    const { gameDetails, gameScreenshots, isLoading } = useSelector(
        (state) => state.details
    );
    return (
        <>
            {!isLoading && (
                <CardShadow
                    className="card-shadow"
                    onClick={exitDetailsHandler}
                >
                    <Details>
                        <Stats>
                            <div className="ratings">
                                <h3>{gameDetails.name}</h3>
                                <h4>Rating: {gameDetails.rating}</h4>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {gameDetails.platforms.map((data) => (
                                        <h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={gameDetails.background_image} alt="m" />
                        </Media>
                        <Description>
                            <p>{gameDetails.description_raw}</p>
                        </Description>
                        <div className="gallary">
                            {gameScreenshots.results.map((img) => (
                                <img key={img.id} src={img.image} alt="i" />
                            ))}
                        </div>
                    </Details>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #5c635e;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;

const Details = styled(motion.div)`
    width: 70%;
    border-radius: 1rem;
    padding: 2rem 4rem;
    background: white;
    position: absolute;
    left: 15%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 2rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 3rem 0rem;
`;

export default GameDetails;

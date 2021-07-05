import React from "react";
import { Link } from "react-router-dom";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Game = ({ name, released, id, image }) => {
    //fetch games
    const dispatch = useDispatch();
    const loadDetailsHandler = (gameId) => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(gameId));
    };

    return (
        <StyledGame onClick={() => loadDetailsHandler(id)}>
            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    overflow: hidden;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    a {
        text-decoration: none;
        all: none;
        h3 {
            color: black;
        }
        p {
            color: black;
        }
    }
    cursor: pointer;
    text-align: center;
    border-radius: 1rem;
`;

export default Game;

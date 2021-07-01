import React from "react";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    padding: 0.4rem 0rem;
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    img {
        width: 100%;
        height: 90%;
        object-fit: cover;
    }
    text-align: center;
    border-radius: 1rem;
`;

export default Game;

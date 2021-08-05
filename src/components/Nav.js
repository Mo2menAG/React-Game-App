import React, { useState } from "react";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";

// icons
import logo from "../img/logo.svg";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../actions/gamesActions";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };
    const homeHandler = () => {
        dispatch({
            type: "CLEAR_SEARCHED",
        });
    };
    return (
        <StayledNav>
            <Logo onClick={homeHandler}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input onChange={inputHandler} type="text" value={textInput} />
                <button type="submit" onClick={formHandler}>
                    Search
                </button>
            </form>
        </StayledNav>
    );
};

const StayledNav = styled(motion.nav)`
    padding: 2rem 5rem 0rem 5rem;
    text-align: center;
    input {
        width: 25%;
        font-size: 1.5;
        padding: 0.3rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 0.845rem;
        border: none;
        padding: 0.3rem 2rem;
        cursor: pointer;
        background: #ff7676;
    }
`;
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
    img {
        height: 1.5rem;
        width: 1.5rem;
    }
`;

export default Nav;

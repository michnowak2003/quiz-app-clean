import React from 'react';
import './Navbar.scss';
import close from '../../close.svg';
import info from '../../info.svg';
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const Navbar = ({children}) => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Button type={"icon"} onClick={() => {}}><img alt="info-button" src={info}/></Button>
            <div className="navbar__children-container">
                {children}
            </div>
            <Button type={"icon"} onClick={() => {navigate('/')}}><img alt="home-button" src={close}/></Button>
        </div>
    );
};

export default Navbar;

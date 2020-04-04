import React from 'react';
import { NavLink } from "react-router-dom";
import { FaPlus, FaStickyNote} from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import './styles.sass';
import styled from 'styled-components';

export const Header = () => {
    return (
        <div className = "appContainer">
            <p className = "logo">NotesApp</p>
            <div className = "page_switcher">
                <StyledNavLink className = "links" exact to = "/"><FaStickyNote className = "icons"/>Actual</StyledNavLink>
                <StyledNavLink className = "links" to = "/archive"><IoIosArchive className = "icons" />Archive</StyledNavLink>
                <StyledNavLink className = "links" to = "/create"><FaPlus className = "icons"/>Create</StyledNavLink>
            </div>
        </div>
        
    )
}

const StyledNavLink = styled(NavLink)`
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    color: black;
    border: 1px solid transparent;
    min-width: 150px;
    height: 55px;
    padding: 10px;
    padding-top: 13px;
    border-radius: 25px;
    &.active {
        border-color: #1E90FF;
        background-color: #F5F5F5;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;
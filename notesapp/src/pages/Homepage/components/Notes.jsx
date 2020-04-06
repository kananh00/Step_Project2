import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles.sass';

export const Notes = ({ title, text, date, color, id}) => {
    const dateConvert = new Date(date);

    const month = dateConvert.getMonth();
    const day = dateConvert.getDate();
    const year = dateConvert.getFullYear();

    return (
        <StyledSingleNote color = {color} to={`/singlenote/${id}`}>
            <h2 className = "title_note">{title}</h2>
            <h5>{day}/{month}/{year}</h5>
            <h4 className = "text_note">{text}</h4>
        </StyledSingleNote>
    )
}

const StyledSingleNote = styled(Link)`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 20%;
    min-height: 200px;
    border: 3px solid transparent;
    background-color: ${p => p.color};
    color: rgb(245,245,245);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    &:not(:nth-child(4n));
        margin-right: 20px;
`;
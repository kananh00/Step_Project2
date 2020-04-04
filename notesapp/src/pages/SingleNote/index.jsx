import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import {DeleteWindow} from './components';
import {Route} from 'react-router-dom';
import { notesContext } from '../../context/notes';
import { MdDeleteForever, MdArchive, MdModeEdit } from "react-icons/md";
export const SingleNote =({ history: { push }, match: { params: { id } } }) => {
    const notesList = useContext(notesContext);
    const note = notesList.find(item => item.id == id);
    const deleteNote = async id => {

        const res = await fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
          const result = await res.json();
        };

    return (
        <Container>
            {note && (
                <StyledSingleNote color = {note.color}>
                    <h2 className = "title_note">{note.title}</h2>
                    <h4 style = {{color: "rgb(245,245,245)"}}>{new Date(note.date).toUTCString()}</h4>
                    <p style = {{minHeight: "400px", fontSize: "20px"}}className = "text_note">{note.text}</p>
                </StyledSingleNote>
            )}
                <ButtonPosition>
                    <StyledButtons><MdModeEdit className = "btn_icons"/>edit</StyledButtons>
                    <StyledButtons><MdArchive className = "btn_icons"/>archive </StyledButtons>
                    <StyledButtons  onClick={function(event){ deleteNote(id); push('/');}}><MdDeleteForever className = "btn_icons"/>delete</StyledButtons>  
                   
                </ButtonPosition>
                    
        </Container>
        
    )
};


const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledSingleNote = styled.div`
    width: 600px;
    min-height: 600px;
    margin: 50px;
    padding: 30px;
    text-align: center;
    border: 1px solid transparent;
    background-color: ${p => p.color};
    color: black;
    border-radius: 15px;
    position: relative;
`
const StyledButtons = styled.button`
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    background-color: #1E90FF;
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 200px;
    justify-content: center;
    cursor: pointer;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .btn_icons {
        font-size: 25px;
        color: white;
        margin-right: 10px;
        margin-bottom: -4px;
    }
`;

const ButtonPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0; 
`;

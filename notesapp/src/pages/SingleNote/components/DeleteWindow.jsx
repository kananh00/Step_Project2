import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { notesContext } from '../../../context/notes';




export const DeleteWindow = ({ history: { push }, match: { params: { id } } }) => {

    const snotesList = useContext(notesContext);


    const snote = snotesList.find(item => item.id == id);

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
            {snote && (
                <Popup>
                    <Close onClick={() => push('/singlenote/:id')}>X</Close>
                    <p>delete</p>

                    <button  onClick={function(event){ deleteNote(id); push('/');}}>BUY</button>
                </Popup>
            )}
        </Container>
    )
};

const Container = styled.div`

    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Popup = styled.div`
    width: 96%;
    padding: 40px;
    text-align: center;
    max-width: 600px;
    color: black;
    border-radius: 15px;
    background: white;
    position: relative;
`

const Close = styled.button`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: red;
    color: white;
    border: none;
    position: absolute;
    top: -15px;
    right: -15px;
`

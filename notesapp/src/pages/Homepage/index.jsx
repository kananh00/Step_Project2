import React from 'react';
import {NoteList} from './components';
export const Homepage = () => {
    return (
        <div style = {{maxWidth: "1600px"}}>
           <h1 style = {{textAlign: "center"}}>MyNotes</h1>
            <NoteList/> 
        </div>

    )
   
}
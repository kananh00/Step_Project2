import React from 'react';
import {NoteList} from './components';
import {SingleNote} from '../../pages';
export const Homepage = () => {
    return (
        <div style = {{maxWidth: "1600px"}}>
           <h1 style = {{textAlign: "center"}}>MyNotes</h1>
            <NoteList/> 
        </div>

    )
   
}
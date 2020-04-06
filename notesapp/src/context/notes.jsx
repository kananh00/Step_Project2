import React, { useState, useEffect, createContext } from 'react';

export const notesContext = createContext();
export const NotesContextProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const res = await fetch('http://localhost:3001/notes');
        const data = await res.json();
        setNotes(data);
    }

    useEffect(() => {getNotes();}, [])

    return (
        <notesContext.Provider value={notes} onChange = {getNotes()}>
            {children}
        </notesContext.Provider>
    )
}
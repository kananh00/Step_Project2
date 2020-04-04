import React, { useContext } from 'react';
import styled from 'styled-components';

import { notesContext } from '../../../context/notes';

import { Notes } from './Notes';

export const NoteList = () => {
    const notes = useContext(notesContext);
    return (
        <div className = "listNotes">
            {notes.map(item => (
                <Notes
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}


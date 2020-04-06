import React, { useContext } from 'react';
import { notesContext } from '../../../context/notes';

import { Notes } from './Notes';

export const NoteList = () => {
    const notes = useContext(notesContext);
    return (
        <div className = "listNotes">
            {notes
            .filter(item => item.status === true)
            .map(item => (
                <Notes
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}


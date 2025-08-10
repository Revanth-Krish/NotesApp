import { useState, useEffect } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Notes() {
    const [notes, setNotes]=useState([]);

    useEffect(()=> {
        const storedNotes= JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(storedNotes);
    },[]);

    useEffect(()=> {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        setNotes([...notes, {id:Date.now(), text}]);
    };

    const deleteNote = (id) => {
        setNotes( notes.filter((note)=> {note.id !== id}));
    };

    const editNote = (id, newText) => {
        setNotes(notes.map((note)=> note.id ==id ? {...note, text:newText} : note ));
    };

    return(
        <div>
            <h1>hello </h1>
            <h1 className="text-2xl font-blod mb-4"> MY NOTES</h1>
            <NoteForm onAdd={addNote} />
            <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
        </div>
    );
}


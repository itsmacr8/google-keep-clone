import { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Notes from "./components/notes/Notes";
import Footer from "./components/footer/Footer";
import { isNotEmpty, getCleanNoteContent } from "./_utils";
import "./App.css";

function App() {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [notes, setNotes] = useState([]);

    function addNote() {
        const newNote = getCleanNoteContent(note);
        if (isNotEmpty(newNote.title) && isNotEmpty(newNote.content)) {
            setNotes([...notes, newNote]);
            note.title = "";
            note.content = "";
        }
    }
    function deleteNote() {
    }
    return (
        <>
            <Header />
            <Form note={note} setNote={setNote} addNote={addNote} />
            <Notes notes={notes} deleteNote={deleteNote} />
            <Footer />
        </>
    );
}

export default App;

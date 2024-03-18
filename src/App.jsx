import { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    function addNote() {
    }
    return (
        <>
            <Header />
            <Form note={note} setNote={setNote} addNote={addNote} />
            <Footer />
        </>
    );
}

export default App;

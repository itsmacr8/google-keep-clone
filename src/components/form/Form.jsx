import { PropTypes } from "prop-types";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Input from "../input/Input";
import "./Form.css";

Form.propTypes = {
  note: PropTypes.object.isRequired,
  setNote: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

function Form({ note, setNote, addNote }) {

  function preventSubmit(event) {
    event.preventDefault();
  }

  function noteContent(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <form className="form" onSubmit={preventSubmit}>
      <Input
        type="text"
        placeholder="Title"
        className="form__input"
        name="title"
        value={note.title}
        onChange={noteContent}
      />
      <textarea
        rows="4"
        className="form__body"
        placeholder="Your note"
        name="content"
        value={note.content}
        onChange={noteContent}
      ></textarea>
      <Fab
        color="primary"
        className="align-button"
        onClick={addNote}
        aria-label="add note"
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

export default Form;

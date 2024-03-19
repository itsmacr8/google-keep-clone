import { PropTypes } from "prop-types";
import Note from "../note/Note";
import "./Notes.css"

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default function Notes({notes, deleteNote}) {
  return (
  <div className="note">
    {notes.map((note, index) => (
        <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
        />
    ))}
  </div>
  );
}

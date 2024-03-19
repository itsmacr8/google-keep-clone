import "./Note.css";
import { PropTypes } from "prop-types";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
};

export default function Note(props) {
  return (
    <div className="note__item" id={props.id}>
      <h2 className="note__title">{props.title}</h2>
      <p className="note__body">{props.content}</p>
      <Fab
        className="align-button"
        color="error"
        onClick={() => props.delete(props.id)}
        aria-label="delete"
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
}

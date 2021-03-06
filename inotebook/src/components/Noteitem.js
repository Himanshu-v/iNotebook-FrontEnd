import React from "react";

function Noteitem(props) {
  const { note, updateNote, handleDelete } = props;

  return (
    <div className="col-md-3">
      <div className="card text-dark bg-warning mb-3 my-3">
        <div className="card-body">
          <div className="container d-flex justify-content-between my-2">
            <h5 className="card-title"> {note.title}</h5>

            <i
              className="fas fa-trash-alt"
              onClick={() => {
                handleDelete(note._id);
              }}
            ></i>
            <i
              className="fas fa-edit"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <div className="container d-flex justify-content-between">
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;

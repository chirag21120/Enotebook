import React, { useContext, useState } from "react";
import NoteContext from "../context/Notes/NoteContext";


function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note,setNote] = useState({title:"",description:"",tags:""})
  const handleAdd = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('tags').value = '';
    setNote({...note,[e.target.name]:e.target.value})
  };
  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  };
  return (
    <div className="card my-5" style={{ width: "30rem" }}>
      <form className="card-body">
        <h5 className="card-title">Add title</h5>
        <input
          type="text"
          name="title"
          id="title"
          size="45"
          aria-describedby="title"
          placeholder="Enter title"
          onChange={onChange}
          minLength={1}
          required
        />
        <h5 className="card-title">Add a Note</h5>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="description"
            name="description"
            onChange={onChange}
            style={{ height: "100px" }}
            minLength={1}
          required
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <h5 className="card-title">Tags</h5>
        <input
          type="text"
          name="tags"
          id="tags"
          size="45"
          aria-describedby="tags"
          placeholder="Enter tags"
          onChange={onChange}
        />
        <button
        disabled={note.title.length<1 || note.description.length<1}
          className="btn btn-primary my-2"
          id="addBtn"
          onClick={handleAdd}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;

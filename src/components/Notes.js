import React, { useContext, useEffect, useRef,useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import NoteContext from "../context/Notes/NoteContext";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const context = useContext(NoteContext);
  const navigation = useNavigate();
  const { notes, fetchNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
  useEffect(() => {
    if(localStorage.getItem('token')){
    fetchNotes();}
    else{
        navigation('/login')
    }
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
};
const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert('Note Updated','primary');
  };
  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
            "display":"none"
        }}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content model">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><form className="card-body">
        <h5 className="card-title">Add title</h5>
        <input
          type="text"
          name="etitle"
          id="etitle"
          size="45"
          aria-describedby="etitle"
          placeholder="Enter title"
          onChange={onChange}
          value={note.etitle}
          minLength={1}
          required
        />
        <h5 className="card-title">Add a Note</h5>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="eAddTxt"
            name="edescription"
            onChange={onChange}
            style={{ height: "100px" }}
            value={note.edescription}
            minLength={1}
          required
          ></textarea>
        </div>
        <h5 className="card-title">Tags</h5>
        <input
          type="text"
          name="etag"
          id="etags"
          size="45"
          aria-describedby="etags"
          placeholder="Enter tags"
          onChange={onChange}
          value={note.etag}
        />
      </form>
      </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<1 || note.edescription.length<1} type="button" onClick={handleClick} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="notes" className="row container-fluid">
      <h3>Your Notes</h3>
      <hr/>
        <div className="container">
            {notes.length===0 && "No notes to Display"}
        </div>
        <div className="notes">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;

import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext';

export default function Home() {
 const context =  useContext(NoteContext);
 const {notes,setNotes} = context
  return (
    <>
        <div id="body"></div>
    <div class="container my-3 ">
      <h1>Welcomes to iNotebook</h1>
      <div class="card my-5" style={{"width": "30rem"}}>
        <div class="card-body">
            <h5 class="card-title">Add title</h5>
            <input type="text" name = "title"  id ="title"     maxlength="50" size="45" m aria-describedby="title" placeholder="Enter title"/>
            <h5 class="card-title">Add a Note</h5>
          <div class="form-floating">
            
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="AddTxt"
              style={{"height": "100px"}}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button class="btn btn-primary my-2" id="addBtn">Add Note</button>
        </div>
      </div>
      <hr/>
      <h3>Your Notes</h3>
      <hr/>
      <div id="notes" class = "row container-fluid">
        {notes.map((note)=>{
          return note.title;
        })}
      </div>
      </div>
    </>
  )
}

import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
// import '../Note.css'
function NoteItem(props) {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note,updateNote} = props

    const randomRotate = ()=>{
      const deg = Math.random() * (5 - -5) + -5;
       return 'rotate(' + deg + 'deg)';
       }

  return (
    <>
      <div className="notecard " >
        <div className="card" style={{
    transform: randomRotate(),
  }}>
            <div className="d-flex align-items-center">
          <h5 className="card-title"> {note.title}</h5>
            <i className="fa-regular fa-trash-can mx-2 " onClick={()=>{deleteNote(note._id);props.showAlert('Deleted Successfully!','primary')}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note); }}></i>
          </div>
          <p className="card-text">{note.description}</p>
          {/* <button id="${index}" onClick="deleteNode(this.id)" className="btn btn-primary del mx-2"></button> */}
        </div>
      </div> 
    </>
  )
}

export default NoteItem

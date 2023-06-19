import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
    const host = "http://localhost:5000"
  const notesIntial = []
  const [notes,setNotes] = useState(notesIntial);

  //fetch All notes
  const fetchNotes = async()=>{
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWI5YWRlZWM0NDcyODMwMGY2MGM0In0sImlhdCI6MTY4NjgxNDA3Mn0.HlKfeEXsi5wIic7CIrbR4y4LozbBG7H7WkyZw_zlZ6E'
        }
    })
    const json = await response.json();
    setNotes(json);
  }

  //Add a note
  const addNote = async(title,description,tag)=>{
     //Api call
     const url = `${host}/api/notes/addnote`
     const response = await fetch(url,{
         method: 'POST',
         headers :{
             'Content-Type': 'application/json',
             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWI5YWRlZWM0NDcyODMwMGY2MGM0In0sImlhdCI6MTY4NjgxNDA3Mn0.HlKfeEXsi5wIic7CIrbR4y4LozbBG7H7WkyZw_zlZ6E'
         },
         body: JSON.stringify({title,description,tag})
     })
     let json = await response.json();
     console.log(json);
      fetchNotes();
  }

  //Delete a note
  const deleteNote = async(id)=>{
     //Api call
     const url = `${host}/api/notes/deletenote/${id}`
     const response = await fetch(url,{
         method: 'DELETE',
         headers :{
             'Content-Type': 'application/json',
             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWI5YWRlZWM0NDcyODMwMGY2MGM0In0sImlhdCI6MTY4NjgxNDA3Mn0.HlKfeEXsi5wIic7CIrbR4y4LozbBG7H7WkyZw_zlZ6E'
         }
     })
     const json = await response.json();
     console.log(json);

     //Client side
    console.log("Deleting note with id "+id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
  }

  //Edit a note
  const editNote = async (id,title,description,tag)=>{
    //Api call
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url,{
        method: 'PUT',
        headers :{
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWI5YWRlZWM0NDcyODMwMGY2MGM0In0sImlhdCI6MTY4NjgxNDA3Mn0.HlKfeEXsi5wIic7CIrbR4y4LozbBG7H7WkyZw_zlZ6E'
        },
        body: JSON.stringify({title,description,tag})
    })
    const json = response.json();
    console.log(json);

    //client side logic
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
        const element = newNotes[index];
        if(element._id===id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
        }
        
    }
    setNotes(newNotes)
  }
   return (
   <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote, fetchNotes}}>
        {props.children }   
    </NoteContext.Provider>)
}

export default NoteState;
import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
  const notesIntial = [  {
    "_id": "648af4784d51469905a3214d",
    "user": "648ab9adeec44728300f60c4",
    "title": "Pehla note updated",
    "description": "checking pehla note updated",
    "tag": "#pehla",
    "date": "2023-06-15T11:22:32.799Z",
    "__v": 0
  },
  {
    "_id": "648b2398d48852d3da933ef9",
    "user": "648ab9adeec44728300f60c4",
    "title": "Doosra note",
    "description": "checking doosra note",
    "tag": "#pehla",
    "date": "2023-06-15T14:43:36.046Z",
    "__v": 0
  }]
  const [notes,setNotes] = useState(notesIntial);
   return (
   <NoteContext.Provider value = {{notes,setNotes}}>
        {props.children }   
    </NoteContext.Provider>)
}

export default NoteState;
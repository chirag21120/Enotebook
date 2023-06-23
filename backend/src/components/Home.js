import React from 'react'
import Notes from './Notes';

export default function Home(props) {
  // const addNote = ()=>{
  //   props.showAlert("Note added","success")
  // }
  return (
    <>
        <div id="body"></div>
    <div className="container my-3 ">
      <h1>Welcomes to iNotebook</h1>
      <hr/>
      <Notes showAlert={props.showAlert}/>
      </div>
    </>
  )
}

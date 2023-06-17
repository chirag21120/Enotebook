import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/Notes/NoteContext'
function About() {
    const a = useContext(NoteContext);
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    },[])
  return (
    <div>
      My name is {a.state.name} and class is {a.state.class};
    </div>
  )
}

export default About

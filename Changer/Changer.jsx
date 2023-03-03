import { useState } from 'react'
import './color.css'

function Changer() {
  const [edit, setEdit] = useState()

  return (
    <div className="App">      
         <div className="box">
          {
            Array(9).fill(" ").map((repeat,id) => (
              <div key={id}>
              {
                edit === id ? 
                (<div className="deff" ></div>) 
                : (<div className="data" onClick={() => setEdit(id)}></div>) 
              }
              </div>
              ))
          }
          </div>    
    </div>
  )
}

export default Changer

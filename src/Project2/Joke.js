import React from 'react'

function Joke(props){
    return (
      <div>
        <h3 style={{display: props.question ? "block" :"none"}}>

          Question:  {props.question}
        </h3>
        <h3>
            PunchLine: {props.punchLine}
        </h3>
      </div>
    );
    
}
export default Joke;
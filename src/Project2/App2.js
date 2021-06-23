import React from 'react'
import Joke from './Joke'
import jokesData from './JokesData'


function App2() {

const JokeComponents = jokesData.map(joke=>
  <Joke key={joke.id} question = {joke.question} punchLine={joke.punchLine}/>)

  return (
    <div>
      {JokeComponents}
    </div>
  );
}

export default App2;

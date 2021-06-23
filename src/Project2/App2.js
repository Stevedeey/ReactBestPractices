import React from 'react'
import Joke from './Joke'
import jokesData from './JokesData'


function App2() {
  // const arr = [1,2,3,4,5,6,7,8,9,0]
  // // const doubled = arr.map(function(num){
  // //   return num * 2
  // // });
  // const doubled = arr.map((num)=>num * 2);

const JokeComponents = jokesData.map(joke=>
  <Joke key={joke.id} question = {joke.question} punchLine={joke.punchLine}/>)

  return (
    <div>
      {JokeComponents}
    </div>
  );
}

export default App2;

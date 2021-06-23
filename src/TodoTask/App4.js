import React from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

function App4(){
const mapData = todosData.map(item=> <TodoItem key={item.id} todo={item}/> )
return <div>{mapData}</div>;
}
export default App4;
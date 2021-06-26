import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './Project2/App2'
import App3 from './ProductList/App3'
import App4 from './TodoTask/App4'
import StateMgt from './ProductList/StateMgt'
import App6 from './TodoTaskClass/App6'
import App5 from './ConditionalRendering/App5'
import Solution1 from './TodoTaskClass/Solution1';
import MyForm from './MyForm.js'
import AppMeme from './MemeGeneratorFolder/AppMeme';



ReactDOM.render(
  <React.StrictMode>
    <AppMeme/>
    <MyForm/>
    {/* <Solution1/> */}
    {/* <App6 /> */}
    {/* <App5/> */}
    {/* <StateMgt />
    <App4 />
    <App3 />
    <App2 />
    <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);



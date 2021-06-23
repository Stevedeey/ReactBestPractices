import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './Project2/App2'
import App3 from './ProductList/App3'
import App4 from './TodoTask/App4'
import StateMgt from './ProductList/StateMgt'
import App6 from './TodoTaskClass/App6'


ReactDOM.render(
  <React.StrictMode>
    <App6 />
    {/* <StateMgt />
    <App4 />
    <App3 />
    <App2 />
    <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);



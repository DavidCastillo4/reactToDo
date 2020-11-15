//App.js
import React, { useState } from 'react';
import './App.css';

let App = () => {
  let [key, setKey] = useState(0);  
  let [items, setItems] = useState({});

  let addItem = event => {
    event.preventDefault();
    setKey(++key);
    let ux = document.getElementsByTagName('input')[0];
    items[key] = { name: ux.value };
    ux.value = '';    
  };

  let delItem = (event) => {
    event.preventDefault();    
    event.target.parentNode.remove();
  };

  return (
    <div>
      todo's
      <form onSubmit={addItem}>
        <input type="text" />
      </form>
      <ul>
        {Object.keys(items).map((k, index) => (
          <li key={index}>
           <button onClick={delItem} >delete</button>  
            {items[k].name}         
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default App;

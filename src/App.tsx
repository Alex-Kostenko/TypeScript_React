import React, {useState, useEffect, ChangeEvent} from 'react';
import {Task} from './modal/task';
import './App.css';

var data = [ 
  { _id: 0, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. '},
  { _id: 1, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. '},
  { _id: 2, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. '}
];

localStorage.setItem('toDoList', JSON.stringify(data));

const App: React.FC = () => {

  useEffect(() => {
    const storage = localStorage.getItem('toDoList')
    if (storage) {
      const data = JSON.parse(storage)
      setToDoList(data)
    }
  }, [])

  const [toDoList, setToDoList] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, item: Task) => {
    let data = toDoList.concat();
    let currentItem = item;
    currentItem.done = e.target.checked;
    data[item._id] = currentItem;
    setToDoList(data);
  }

  return (
    <div className="App">
      {toDoList.map((item: Task) => 
        <div key={item._id}>
          <input type="checkbox" checked={item.done} onChange={(e) => handleChange(e, item)}/>
          {item.text}
        </div>
      )}
    </div>
  );
}

export default App;

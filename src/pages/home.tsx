import React, { useState, useEffect, ChangeEvent } from 'react';
import { Task } from '../modal/task';
import { Input, Button, Icon } from 'semantic-ui-react'
import createNewItem from '../utils/create';
import updataItem from '../utils/updata';


var data = [
  { _id: 0, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' },
  { _id: 1, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' },
  { _id: 2, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' }
];

localStorage.setItem('toDoList', JSON.stringify(data));

const App: React.FC = () => {

  useEffect(() => {
    const storage = localStorage.getItem('toDoList')
    if (storage) {
      const data: Task[] = Array.from(JSON.parse(storage));
      setToDoList(data)
    }
  }, []);

  const [toDoList, setToDoList] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <Input onChange={handleChangeInputValue} value={inputValue}/>
      <Button animated onClick={() => createNewItem(toDoList.length, inputValue, toDoList, setInputValue, setToDoList)}>
        <Button.Content visible>Add</Button.Content>
        <Button.Content hidden>
          <Icon name='check' />
        </Button.Content>
      </Button>
      {toDoList.map((item: Task) =>
        <div key={item._id}>
          <input type="checkbox" checked={item.done} onChange={(e: ChangeEvent<HTMLInputElement>) => updataItem(e, toDoList, item, setToDoList) } />
          {item.text}
        </div>
      )}
    </div>
  );
}

export default App;

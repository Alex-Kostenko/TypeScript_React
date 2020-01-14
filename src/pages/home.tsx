import React, { useState, useEffect, ChangeEvent} from 'react';
import { Task } from '../modal/task';
import { Input, Button, Icon, Checkbox } from 'semantic-ui-react'
import createNewItem from '../utils/create';
import updateItem from '../utils/updata';
import deleteItem from '../utils/delete';


// var data = [
//   { _id: 0, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' },
//   { _id: 1, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' },
//   { _id: 2, done: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione. ' }
// ];

// localStorage.setItem('toDoList', JSON.stringify(data));

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
        !item.delete && <div key={item._id}>
          <Checkbox
            checked={item.done} 
            onChange={() => updateItem(toDoList, item, setToDoList)}
            label={item.text}
          />
          <Icon name='window close outline' onClick={() => deleteItem(toDoList, item, setToDoList)} />
        </div>
      )}
    </div>
  );
}

export default App;

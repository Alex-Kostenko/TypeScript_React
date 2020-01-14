import { Task } from '../modal/task'

const createNewItem = (nextId: number, value: string, array: Task[], reset: Function, updataState: Function) => {
  let newItem: Task = {
    _id: nextId,
    done: false,
    text: value,
    delete: false
  };
  console.log(newItem);
  const newArray = array.concat(newItem)
  updataState(newArray);
  reset('');
  localStorage.setItem('toDoList', JSON.stringify(newArray));
}

export default createNewItem;

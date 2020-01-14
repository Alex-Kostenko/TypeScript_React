import { Task } from '../modal/task';

const deleteItem = (array: Task[], item: Task, updataState: Function) => {
  // const newArr = data.filter(item => item._id !== id);
  let data: Task[] = array.concat();
  data[item._id].delete = !item.delete;
  updataState(data);
  localStorage.setItem('toDoList', JSON.stringify(data));
}

export default deleteItem;

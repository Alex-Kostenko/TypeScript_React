import { Task } from '../modal/task';

const updateItem = (array: Task[] ,item: Task , updataState: Function) => {
  let data: Task[] = array.concat();
  data[item._id].done = !item.done;
  updataState(data);
  localStorage.setItem('toDoList', JSON.stringify(data));
}

export default updateItem;

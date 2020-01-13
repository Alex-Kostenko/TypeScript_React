import { Task } from '../modal/task';
import {ChangeEvent} from 'react';

const updataItem = (e: ChangeEvent<HTMLInputElement>, array: Task[] ,item: Task , updataState: Function) => {
  let data: any = array.concat();
  let currentItem = item;
  currentItem.done = e.target.checked;
  if (data && item._id) {
    data[item._id] = currentItem;
  }
  console.log(data);
  
  updataState(data);
}

export default updataItem;

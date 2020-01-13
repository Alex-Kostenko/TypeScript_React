import { Task } from '../modal/task'

const createNewItem = (nextId: number, value: string, array: Task[], reset: Function, updataState: Function) => {
  let newItem: Task = {
    _id: nextId,
    done: false,
    text: value
  }
  console.log(newItem);
  updataState(array.concat(newItem))
  reset('')
}

export default createNewItem;

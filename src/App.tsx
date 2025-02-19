import React, { FC, useState } from 'react';
import { ITask } from './Interfaces';
import notepad from './assets/notepad.png';
import tick from './assets/tick.png';
import './App.css';
import TodoTask from './Components/TodoTask';


const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChanege = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if(e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    if (task === '' || deadline === 0) {
      alert('Task or deadline cannot be empty');
    } else {
      setTodoList([...todoList, newTask]);
      setTask('');
      setDeadline(0);
    }
    
    console.log(todoList);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  };

  const completeTask = (taskNameToComplete: string): void => {
    setTodoList(
      todoList.map((task) =>
        task.taskName === taskNameToComplete
          ? { ...task, completed: true }
          : task
      )
    );
  };
  



  return (
    <div className="App">
      <div className='header'>
        <div className='logo' ><img src={notepad} srcSet='notepad img'/> </div>
        <div className='input-container'>
          <input type='text' placeholder='Task...' name='task' onChange={handleChanege} value={task}/>
          <input type='number' placeholder='Deadline (days)' name='deadline' onChange={handleChanege} value={deadline} />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className='todoDisplay'>
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} deleteTask={deleteTask} completeTask={completeTask}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Lists from "./components/Lists";
import Form from './components/Form';

export default function App() {

    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState("");
    const btnSubmit = (e) => {
    e.preventDefault();//입력할때마다 새로고침 되는 것을 막음
    let newTodo = {
        id: Date.now(),
        title: value,
        completed: false
    }
    setTodoList(prev => [...prev, newTodo]);
    setValue("");
}

  // 화면에 나타나는 부분
    return (
        <div className='container'>
        <div className='todoBlock'>
            <div className='title'>
            <h1>To Do List</h1>
            </div>

            <Lists todoList = {todoList} setTodoList={setTodoList}/>
            <Form value={value} setValue={setValue} btnSubmit={btnSubmit}/>
            
        </div>
        </div>
    )
}

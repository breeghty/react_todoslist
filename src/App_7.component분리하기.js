import React, {useState} from 'react'
import Lists from "./components/Lists"
export default function App() {

  const [todoList, setTodoList] = useState([]);
  const textChange = (e) => {
    // console.log('e', e.target.value) 콘솔창에 입력값이 나타남
    setValue(e.target.value);
    // 마지막 입력창에 글씨 지워주기
  }

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
      {/* map() 메소드를 이용해 배열내의 요소를 호출한 결과를 모아 새로운 배열로 반환
      {todoList.map((data) =>
        <div style={listStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)}/>
          {data.title}
          <button style={btnStyle} onClick={() => btnClick(data.id)}>X</button>
        </div>
      )} */}
      <Lists todoList = {todoList} setTodoList={setTodoList}/>
      
        <form style={{display:'flex'}} onSubmit={btnSubmit}>
          <input type="text" name="value" style={{flex:'10', padding:'5px'}}placeholder="해야할 일을 입력하세요"
          onChange={textChange} value={value} />
          <input type="submit" value="입력" style={{flex:'1'}} />
        </form>
      </div>
    </div>
  )
}

import React, {useState} from 'react'

export default function App() {
  // 리스트스타일
  const listStyle = {
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration:"none"
  }

  // 버튼 스타일
  const btnStyle ={
    color:"#fff",
    border:"none",
    padding:"5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float:"right"
  }
  // 할일목록 배열에 저장
  const todoList = [
    {id: "1", title:"공부하기", completed: true},
    {id:"2", title:"청소하기", completed: false}
  ]
  const textChange = (e) => {
    // console.log('e', e.target.value) 콘솔창에 입력값이 나타남
    setValue(e.target.value);
  }

  const [value, setValue] = useState("");
  // 화면에 나타나는 부분
  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>To Do List</h1>
        </div>
      {/*map() 메소드를 이용해 배열내의 요소를 호출한 결과를 모아 새로운 배열로 반환 */}
      {todoList.map((data) =>
        <div style={listStyle} key={data.id}>
          <input type="checkbox" defaultChecked={false}/>
          {data.title}
          <button style={btnStyle}>X</button>
        </div>
      )}

      {/* 할일목록 추가 입력창 만들기 */}
        <form style={{display:'flex'}}>
          <input type="text" name="value" style={{flex:'10', padding:'5px'}}placeholder="해야할 일을 입력하세요"
          onChange={textChange} value={value} />
        </form>
      </div>
    </div>
  )
}

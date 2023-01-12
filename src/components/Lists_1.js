import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
export default function Lists({todoList, setTodoList}) {
    
    const listStyle = (completed) => {
    return{
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration:completed ? "line-through" : "none"
        }
    }
    const btnStyle ={
        color:"#fff",
        border:"none",
        padding:"5px 9px",
        borderRadius: "50%",
        cursor:"pointer",
        float:"right"
    }
    const btnClick = (id) =>{
        let newTodoList = todoList.filter(data => data.id !== id)
        console.log('newTodoList', newTodoList);
        setTodoList(newTodoList);
    }
    const checkboxCompleted = (id) =>{
        let newTodoList = todoList.map(data => {
            if(data.id===id){
            data.completed = !data.completed;
            }
            return data;
        })
        setTodoList(newTodoList);
    }

    return (
        <div>
            <DragDropContext>
                <Droppable droppableId='todoApp'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {/*map() 메소드를 이용해 배열내의 요소를 호출한 결과를 모아 새로운 배열로 반환 */}
                            {todoList.map((data, index) =>
                                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                    {(provided, snapshot)=> (
                                        <div key={data.id}{...provided.dragHandleProps} ref={provided.innerRef} {...provided.draggableProps}>
                                            <div style={listStyle(data.completed)}>
                                                <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)}/>
                                                {data.title}
                                                <button style={btnStyle} onClick={() => btnClick(data.id)}>X</button>
                                            </div>
                                        </div>
                                    )}
                                    
                                </Draggable>
                            )}
                            {provided.placeholder}
                            {/* 드래그시 레이아웃이 어긋나는 것 수정 */}
                        </div>
                    )}
                    
                </Droppable>
            </DragDropContext>
        </div>
    )
}

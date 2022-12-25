import React,{useState} from 'react'
import Todolist from './Todolist'

const App = () => {
  const [task,setTask] = useState("")
  const [todos,setTodos] = useState([])
  const changeHandle = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(task)
    const newTodo = [...todos,task]
    setTodos(newTodo)
    setTask("")
  }
  const deleteHandler = (indexvalue) => {
    const newTodo = todos.filter((todo,index)=>index!==indexvalue)
    setTodos(newTodo)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h1>TODO LIST</h1>
          <input size="30" type="text" name="task" value={task} onChange={changeHandle} /> &nbsp; &nbsp;
          <input type="submit" name="Add" value="Add" />
        </form>
        <Todolist todolist={todos} deleteHandler={deleteHandler}/>
      </center>
    </div>
  )
}

export default App
import { useState } from 'react'
import Task from './components/task'
function App() {
  const [taskArray,setTaskArry] = useState([]);
  const taskHandler = ()=>{
      const taskName = document.getElementById('taskName').value;
      setTaskArry([...taskArray,taskName])
  }
  return (
    <>
    <input type="text" id="taskName"/>
    <button onClick={taskHandler}>Submit</button>
    <div className="toDO">
      <h1>TODO List </h1>
      <div className="subHeading">
          <div id='TaskName'>
          <h5 >Task Name</h5>
          <ol id='addtask'>
          {taskArray.map((item)=>{
            return <Task Name={item}/>
          })}
          </ol>
          </div>
      </div>
    </div>
    </>
  )
}

export default App

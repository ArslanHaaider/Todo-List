import { useState } from "react";

const Task = (props) =>{
    return(
        <div>
           <li><h6>{props.Name}</h6></li> 
        </div>
    )
}

export default Task;
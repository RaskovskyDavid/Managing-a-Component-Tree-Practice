import React, { useState } from "react";
function TodoItem(props){
    // const [isDone, setIsDone] = useState(false);
    function handleClick(){
        // setIsDone((prevValues) => {
        //     return !prevValues;
        // });
    };
    return(
        // {handleClick}
        <div onClick={() =>{
             props.onChecked(props.id)
             }}>
        {/* style={{textDecoration: isDone? "line-through": "none"}} */}
    <li >{props.text}</li>
    </div> )
}

export default TodoItem;
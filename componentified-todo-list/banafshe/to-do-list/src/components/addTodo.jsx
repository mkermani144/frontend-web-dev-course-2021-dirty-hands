import React, { useState } from 'react';


const AddTodo = ({addHandler}) => {
    const [todoTitle, setTodoTitle] = useState("");
    const handleInputChange = (event) => {
        setTodoTitle(event.target.value);
    };
    
    const add = () => {
        if (todoTitle === "") {
            alert("To-do Title is required")
            return
        }
            const todo = {
                ownerId: 4,
                title: todoTitle,
                cheked: false,
            }
            addHandler(todo)
            setTodoTitle("")
            
    }


    return (
        <>
        <div className="border border-info m-2 p-2">
            <label className="form-label "><h2>New To-DO</h2></label>
            <div className="row ">
                <div className="col-md-6 col-sm-12 my-2"><input type="txt"  value={todoTitle}
                 onChange={handleInputChange}
                  className="form-control " id="inputTask"
                   placeholder="Enter your task title here"/></div>
                 <div className="col-md-4 col-sm-12 my-2">
                     <button type="button" className="btn btn-success mx-2 " onClick={add}>Add</button>
                     {/* <button type="button" className="btn btn-warning  mx-2 " onClick={addBottom}>Add to Bottom</button> */}
                    </div>
            </div>
            
        </div>
        </>
    )
}

export default AddTodo
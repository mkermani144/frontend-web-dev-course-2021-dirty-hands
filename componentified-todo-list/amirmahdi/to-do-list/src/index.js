import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Itemlist from './Itemlist';



const App = () => {
  const [inputItems, setInputItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputAdd = (event) => {
      event.preventDefault();
      if(inputValue.length===0){
        return;
      }else{
      const id = (inputItems.length)?inputItems[inputItems.length - 1].id +1 :0;
      setInputItems([...inputItems, { id: id, value: inputValue, complete:false }]);
      setInputValue("");
      }
  }
  const handleRemove = (id)=>{
         setInputItems(inputItems.filter(item => item.id !==id));
        }
  const handleAddToBottom = (id)=>{
      let newArray=[...inputItems];
      let objectIndex = newArray.findIndex(obj=>obj.id ===id);
      if(objectIndex!==newArray.length-1){
        let temp=newArray[objectIndex];
        newArray[objectIndex]=newArray[objectIndex+1];
        newArray[objectIndex+1]=temp;
        setInputItems([...newArray]);
      }
    }
  const handleAddToTop = (index) => {
      let newArray=[...inputItems];
      let objectIndex = newArray.findIndex(obj=>obj.id ===index);
      if(objectIndex!==0){
        let temp=newArray[objectIndex];
        newArray[objectIndex]=newArray[objectIndex-1];
        newArray[objectIndex-1]=temp;
        setInputItems([...newArray]);
      }
    }
    const handleDone = (event,id)=>{
        let done = inputItems.find(item =>item.id ===id);
        if(event.target.checked===true){
          done.complete=true
         inputItems.sort((a,b)=>a.complete - b.complete)
        }else{
          done.complete=false;
          inputItems.sort((a,b)=>a.complete - b.complete)
        }
        setInputItems([...inputItems]);
      }
    return (
      <div >
        { <form onSubmit={handleInputAdd}>
          <input type = "text"
          className='forminput'
          value = {inputValue}
          onChange = {e => setInputValue(e.target.value)}
          />
          <input type="submit" value="submit"/>
          </form> }

          {inputItems.map(note =>(
           <li  key={note.id}>
            <Itemlist toDo={note.value} id={note.id} complete={note.complete} deletetoDo={(id)=>handleRemove(id)}
                    down={(id)=>handleAddToBottom(id)} top={(id)=>handleAddToTop(id)} done={(e,id)=>handleDone(e,id)} />
            </li>
          ))}
      </div>
    )
};

ReactDOM.render(
   <App /> ,
    document.getElementById('root')
);



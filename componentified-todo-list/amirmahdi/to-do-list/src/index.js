import React, { useState,useEffect } from 'react';
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
      setInputValue("");
        const body=JSON.stringify({
          ownerId: 3,
          title: inputValue,
          checked : false
        });
        const headers={
          'Content-Type': 'application/json'
        }
       fetch('https://todolist.ehsan-rafee.ir/api/todolist',{
        method:'POST',
         body,
         headers,
      })
  };
}
  useEffect(
    () => {
      const sideEffect = async () => {
      const response =await fetch('https://todolist.ehsan-rafee.ir/api/todolist')
      const items=(await response.json()).filter((owner)=> owner.ownerId===3);
    setInputItems(items);
    }
    sideEffect();
      },[])

  const handleRemove = (id)=>{
    const deleteurl='https://todolist.ehsan-rafee.ir/api/todolist/'+id;
    const sideEffect = async () => {
     await fetch(deleteurl,{
        method:'DELETE'})
        }
    sideEffect();
        }
    const handleDone = (event,id)=>{
        let done = inputItems.find(item =>item.id ===id);
        const headers={
          'Content-Type': 'application/json'
        }
        if(event.target.checked===true){
          done.checked=true
          inputItems.sort((a,b)=>a.checked - b.checked)
        }else{
          done.checked=false;
          inputItems.sort((a,b)=>a.checked - b.checked)
        }
        const body=JSON.stringify({
          title:done.title,
          checked:done.checked
        });
      const deleteurl='https://todolist.ehsan-rafee.ir/api/todolist/'+id;
      const sideEffect = async () => {
      await fetch(deleteurl,{
        method:'PUT',body,headers
      })}
      sideEffect()
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
            <Itemlist toDo={note.title} id={note.id} checked={note.checked} deletetoDo={(id)=>handleRemove(id)}
                    /* down={(id)=>handleAddToBottom(id)} top={(id)=>handleAddToTop(id)}*/ done={(e,id)=>handleDone(e,id)} />
            </li>
          ))}
      </div>
    )
};

ReactDOM.render(
   <App /> ,
    document.getElementById('root')
);




// const handleAddToBottom = (id)=>{
  //     let newArray=[...inputItems];
  //     let objectIndex = newArray.findIndex(obj=>obj.id ===id);
  //     if(objectIndex!==newArray.length-1){
  //       let temp=newArray[objectIndex];
  //       newArray[objectIndex]=newArray[objectIndex+1];
  //       newArray[objectIndex+1]=temp;
  //       setInputItems([...newArray]);
  //     }
//}
// const handleAddToTop = (index) => {
//     let newArray=[...inputItems];
//     let objectIndex = newArray.findIndex(obj=>obj.id ===index);
//     if(objectIndex!==0){
//       let temp=newArray[objectIndex];
//       newArray[objectIndex]=newArray[objectIndex-1];
//       newArray[objectIndex-1]=temp;
//       setInputItems([...newArray]);
//     }
//   }
import React from 'react';

const Itemlist = (props) => {
    return(
        <div>
            <input type="checkbox" id={props.id} title={props.toDo} checked={props.checked ?true :false} onChange={(e)=>props.done(e,props.id)}  />
            <label className={props.checked ? 'done' : 'notdone'}>{props.toDo}</label> <br></br>
            {/* <button onClick={()=>props.top(props.id)}>Add to top</button>
            <button onClick={()=>props.down(props.id)}>Add to bottom</button> */}
            <button onClick={()=>props.deletetoDo(props.id)}>Remove</button>
        </div>
    )
}

export default Itemlist;

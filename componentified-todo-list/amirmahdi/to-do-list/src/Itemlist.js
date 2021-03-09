const Itemlist = (props) => {
    return(
        <div>
            <input type="checkbox" id={props.id} value={props.toDo} onChange={(e)=>props.done(e,props.id)}  />
            <label className={props.complete ? 'done' : 'notdone'}>{props.toDo}</label> <br></br>
            <button onClick={()=>props.top(props.id)}>Add to top</button>
            <button onClick={()=>props.down(props.id)}>Add to bottom</button>
            <button onClick={()=>props.deletetoDo(props.id)}>Remove</button>
        </div>
    )
}

export default Itemlist;

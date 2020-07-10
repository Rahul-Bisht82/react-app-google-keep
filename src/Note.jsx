import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note =(props)=>{
    const deletenote=()=>{
        props.delete(props.id);
    }

    return(<>
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <button className="btn-div" onClick={deletenote}>
        <DeleteOutlineIcon className="delete-icon"  />
        </button>
    </div>
    
    </>);
}
export default Note;
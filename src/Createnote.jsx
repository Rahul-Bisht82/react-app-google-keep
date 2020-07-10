import React, { useState } from 'react';

const Createnote=(props)=>{
const [note, setNote] = useState({
    title:"",
    message:""
});
const [expand, setexpand] =useState(false);

const display =()=>{
    setexpand(true);
};

const inputEvent=(event)=>{


const { name, value} =event.target;
setNote((predate)=>{
    return {
        ...predate,
        [name]:value,
    };
});
   console.log(note); 
};

    const addEvent=()=>{
    
        props.passnote(note);
        setNote({
            title:"",
            message:""
        });


    };


    return(<>
    <section>
       <div className="main-div">
           <form>
           { expand? <input type="text" placeholder="Title" 
           autoComplete="off" value={note.title} name="title" onChange={inputEvent} /> : null }
           
          <textarea row="" column="" onClick={display} placeholder="Write a note" value={note.message} name="message" onChange={inputEvent} ></textarea>
            

              { expand? <button type="button"  class="btn btn-warning"   onClick={addEvent} >+</button> :null}              
           </form>
       </div>
    </section>
    </>);
}
export default Createnote;
import React, { useState,useEffect } from 'react';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';
const App=()=> {

  const [additem, setadditem] =useState([]);
  useEffect(()=>{
    document.title = "Google-keep-clone || web-app";
  },[]);

  const addNote=(note)=>{
    setadditem((preval)=>{
      return[...preval,note];
    });
    console.log(note);
  };

const deleteitem=(id)=>{
    setadditem((olddata)=>
    olddata.filter((curdata,index)=>{
      return index !==id;
    })
    )
};


  return (
   <>
<Header />
<Createnote passnote={addNote} />
{
  additem.map((val, index)=>
  <Note 
  title={val.title} 
  message={val.message} 
  key={index} 
  id={index}
  delete ={deleteitem}
   />)
}
<Footer />
   </>
  );
}

export default App;

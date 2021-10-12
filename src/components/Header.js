import React from 'react';
import { useState } from 'react';

export default function Header({addTodo}) {
    const [form,setForm]=useState({id:"",task:"",completed:false});

    const onChangeInput=((e)=>{
        setForm({...form,task:e.target.value});
    });

    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.task.trim())
        {
            addTodo({...form,id:Math.random()});
            setForm({...form,task:""});
        }

    }
  return (
    <div className="header">
        <h1>Todos List</h1>
        <form onSubmit={onSubmit} >
            <input name="task" value={form.task} onChange={onChangeInput} />
            <button type="submit">Ekle</button>
        </form>
      
    </div>
  )
}

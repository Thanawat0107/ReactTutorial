import React from 'react'
import "./Item.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function Item(props) {
  const {data, deleteTask, editTask} = props;
  return (
    <div className='list-item'>
      <p className='title'>{data.id} {data.title}</p>
      <div className='button-container'>
      <AiOutlineDelete className='btn' onClick={()=>deleteTask(data.id)} />
      <AiOutlineEdit className='btn' onClick={()=>editTask(data.id)}/>
      </div>
    </div>
  )
}

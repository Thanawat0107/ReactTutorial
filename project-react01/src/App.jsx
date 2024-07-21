import React, {useState, useEffect} from 'react'
import "./App.css"
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'

export default function App() {
  const taskLocals = JSON.parse(localStorage.getItem("taskLocal"));
  const [task, setTask] = useState(taskLocals || []);
  const [editId, setEditId] = useState(0);
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("ligth");
  // useEffect(()=>{
  //   console.log("1.ทำครั้งแรกและทุกครั้งที่ state เปลี่ยน");
  // });
  // useEffect(()=>{
  //   console.log("2.ทำครั้งแรกและครั้้งเดียว state เปลี่ยน");
  // },[]);
  // useEffect(()=>{
  //   console.log("3.ทำครั้งแรกและเมื่อมีเงื่อนไขการเปลี่ยนแปลงค่า state เปลี่ยน");
  // },[editId]);

  // const taskLocals = JSON.parse(localStorage.getItem("taskLocal"));
 
  useEffect(()=>{
    localStorage.setItem("taskLocal", JSON.stringify(task));
  },[task]);

  const deleteTask = (id) => {
    const resultDelete = task.filter(item=>item.id !== id);
    setTask(resultDelete);
  }
  const editTask = (id) => {
    setEditId(id);
    const resultEdit = task.find((x)=>x.id === id);
    setTitle(resultEdit.title);
  }
  const saveTask = (e) =>{
    e.preventDefault();
    if(!title){
      alert("Not found");
    } else if(editId){
      const updateTask = task.map((item)=> {
          if(item.id === editId){
            return {...item, title}
          }

          return item;
      });
      // console.log(updateTask);
      setTask(updateTask);
      setEditId(0);
      setTitle("");
      
    } else{
      const newTask = {
        id:Math.floor(Math.random()*100),
        title:title
      }
      setTask([...task, newTask]);
      setTitle("");
    }
  }
  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {task.map((data)=>(
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
          ))}
        </section>
      </div>
    </div>
  )
}

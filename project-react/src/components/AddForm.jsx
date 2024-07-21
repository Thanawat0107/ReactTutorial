import React from "react";
import { useState } from "react";
import "./AddForm.css";

export default function AddForm(props) {
  const {students, setStudent} = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  function saveStudent(e) {
    //เมื่อ preventDefault() ถูกเรียกในฟังก์ชันจัดการเหตุการณ์ (event handler)
    // มันจะหยุดพฤติกรรมเริ่มต้นของเหตุการณ์นั้นจากการเกิดขึ้น
    e.preventDefault();
    if(!name) {
      alert("Not found!");
    }else{
      //object
      const newStudent = {
        //property
        id:Math.floor(Math.random()*1000),
        name:name,
        gender:gender
    }
    setStudent([...students, newStudent]);
    setName("");
    setGender("male");
    }
  }
  //เมื่อผู้ใช้กรอกข้อมูลใน input ฟังก์ชัน setName จะถูกเรียกใช้งานและเปลี่ยนแปลงค่า name
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit" className="btn-add">save</button>
      </form>
    </section>
  );
}

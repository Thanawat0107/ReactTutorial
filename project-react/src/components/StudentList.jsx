import React from "react";
import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";

//รับ props ที่ถูกส่งมาจาก componentApp
export default function StudentList(props) {
  // สร้าง state
  const [show, setShow] = useState(true);
  //กระจายค่าที่อยู่ใน props
  const { students, deletE } = props;
  const btnStyle = {
    background: show ? "#D7D7D7" : "green",
    color: show ? "#000000" : "#FFFF",
  };
  return (
    <>
      <ul>
        <div className="header">
          <h1>StudentsQuantity = ( {students.length} )</h1>
          <button onClick={() => setShow(!show)} style={btnStyle}>
            {show ? "Hiedin" : "Show"}
          </button>
        </div>
        {show && students.map((data) => (<Item key={data.id} data={data} deletE={deletE} />
          ))}
      </ul>
    </>
  );
}

import React from "react";
import "./Item.css";
//รับค่าที่ถูกส่งมาจาก componentStudentList
export default function Item(props) {
  //กระจายค่าที่อยู่ใน props
  const { data, deletE } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>
          {data.gender} = {data.name}
        </p>
        <button onClick={() => deletE(data.id)} className="delete">
          Delete
        </button>
      </li>
    </>
  );
}

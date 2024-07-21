import React from "react";
import "./AddForm.css"

export default function AddForm(props) {
  const {title, setTitle, saveTask, editId} = props;
  return (
    <>
      <h2>Work management app</h2>
      <form onSubmit={saveTask}>
        <div className="form-controll">
          <input type="text" className="text-input" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <button type="submit" className="submit-btn">{editId ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
}

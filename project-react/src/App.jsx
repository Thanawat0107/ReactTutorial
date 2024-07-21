import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/AddForm";
import { useState } from "react";
import "./App.css";

function App() {
  // สร้าง state
  const [students, setStudent] = useState([]);
  function deletE(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <div className="container">
      <Header title="Home" />
      <AddForm students={students} setStudent={setStudent}/>
      <StudentList students={students} deletE={deletE} />
    </div>
  );
}

export default App;

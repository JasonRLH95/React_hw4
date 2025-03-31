import { useLayoutEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextApi} from './context/ContextApi';
import './App.css'
import StudentsListPage from './pages/StudentsListPage';
import NewStudentForm from './pages/NewStudentForm';
import Navbar from './components/Navbar';

function App() {
  const [list, setList] = useState(()=>{
    const students = localStorage.getItem("students");
    return students ? JSON.parse(students) : [];
  })
  
  useLayoutEffect(()=>{
    localStorage.setItem("students", JSON.stringify(list));
  },[list])

  const addStudent = (_newStudent)=>{
    setList([...list, _newStudent]);
  }

  const removeAllStudents = ()=>{
    setList([]);
  }

  return (
    <div className='App'>
      <ContextApi value={{list, addStudent, removeAllStudents}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<StudentsListPage/>}/>
            <Route path='add' element={<NewStudentForm/>}/>
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </div>
  )
}

export default App

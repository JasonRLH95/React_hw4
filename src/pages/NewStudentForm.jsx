import React,{useContext, useRef} from 'react';
import { ContextApi } from '../context/ContextApi';

export default function NewStudentForm() {
    const {addStudent, list} = useContext(ContextApi);
    const nameRef = useRef()
    const scoreRef = useRef()

    const submitForm = (e) => {
        e.preventDefault();
        if(parseInt(scoreRef.current.value) > 100 || parseInt(scoreRef.current.value) < 0){
            return alert("Score must be between 0-100!");
        }
        try{
            const _student = {
                name: nameRef.current.value,
                score: scoreRef.current.value,
                id: Date.now(),
            }
            const res = list.filter((val)=>{
                return val.name === _student.name;
            })
            if(res.length !== 0){
                return alert("Student already exists");
            }
            addStudent(_student);
            nameRef.current.value = "";
            scoreRef.current.value = "";
        }
        catch(err){
            console.error("Error adding new student", err);
        }
    }

    return (
        <div className='form_component'>
            <h1>Add Student</h1>
            <form onSubmit={submitForm}>
                <div className='form_container'>
                    <div className="form_inputs">
                        <label>Name:</label>
                        <input ref={nameRef} type="text" placeholder="Ex: Avi Cohen"/>
                    </div>
                    <div className="form_inputs">
                        <label>Score:</label>
                        <input ref={scoreRef} type="text" placeholder='0-100'/>
                    </div>
                </div>
                <button className='submitBtn' type='submit'>Add Student</button>
            </form>
        </div>
    )
}

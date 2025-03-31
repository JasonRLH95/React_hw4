import React,{useContext} from 'react';
import { ContextApi } from '../context/ContextApi';
import StudentCard from '../components/StudentCard';

export default function StudentsListPage() {
    const {list, removeAllStudents} = useContext(ContextApi);

    const deployList =()=>{
        const sortedList = list.sort((a, b)=> b.score - a.score);
        return sortedList.map((student, inx)=>{
            return <StudentCard key={`studentCard_${inx+1}`} student={student} inx={inx+1}/>
        })
    }
    return (
        <div className='studentsList_component'>
            <h1>Students List</h1>
            {list.length !== 0 ? 
            <div>
                <table className='studentsTable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deployList()}
                    </tbody>
                </table>
                <button onClick={()=>{removeAllStudents()}}>Reset</button>
            </div> : <h2>Empty...</h2>}
        </div>
    )
}

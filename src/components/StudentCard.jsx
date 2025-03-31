import React from 'react'

export default function StudentCard({ student, inx }) {
  return (
    <tr>
        <td>{inx}</td>
        <td>{student.name}</td>
        <td>{student.score}</td>
    </tr>
  )
}

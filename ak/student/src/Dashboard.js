import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='container'>
        <h1>Student List</h1>
        <table className='table'>
            <thead>
                <th>Name</th>
                <th>Reg no</th>
                <th>Action</th>
            </thead>
            <tbody>
                <td>arun</td>
                <td>2222</td>
                <Link to="/student"button>view</Link>
            </tbody>
        </table >
           <Link to="/add" button className='btn btn-primary'>Add a student</Link>
    </div>
  )
}

export default Dashboard

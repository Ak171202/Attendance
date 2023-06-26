import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'


function Addstu() {
   
    
      const formik=useFormik({
        initialValues:{
            name:"",
            regno:""
        }, 
        onSubmit:async values=>{
        try {
        await axios.post("https://6487fa170e2469c038fcb6e3.mockapi.io/student/",values
        )
        alert("Data saved")
        } catch (error) {
            console.log(error);
        }
        }
    })
    return (
        <div>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                     <label>Name</label>
                     <input type='text' name="name" className='form-control'
                     onChange={formik.handleChange}
                     value={formik.values.name}></input>
                     <div className='col-lg-6'></div>
                      <label>RegNo</label>
                     <input type='text' name="name" className='form-control'
                     onChange={formik.handleChange}
                     value={formik.values.regno}></input>
                     <div className='col-lg-6'></div>
                     <input type='submit'>Submit</input>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Addstu

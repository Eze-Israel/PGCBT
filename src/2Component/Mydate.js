import React from 'react'
import  "../css/Time.css"

const Mydate = () => {
// 
let date = new Date()
let day  = date.getDay()
let yr = date.getFullYear()
let mark = date.getDate()
let arr = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <>

    <div className='DATE'> {arr[day]} {mark}  {yr}  </div>


    </>
  )

}

export default Mydate

import React from 'react'
import "../css/Footer.css"
import { FaPhone,FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {

const date = new Date()
 const year = date.getFullYear()




  return (
    <div className='Foot' >
    
   <div className='FootInfo' >  
  <p> <a href="https://wa.me/+2347061033459" rel="norerrer">   <FaWhatsapp  style={{
    fontSize: '40px',color: 'green'
  }}/></a></p>
   <p> <FaEnvelope style={{ color: "orange"}} /> Ezeisraeloluoma123@gmail.com</p>
   <p>  <FaPhone   style={{ color: "orange"}}/> +2347061033459 </p>
    <p><strong>copyright &copy; {year} Eze Israel Oluomachukwu</strong></p> <p>Next Imperial Computer Institute</p>
    <p>All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer

import React from 'react'

export const Pagination = ({prev, next, onPrevious, onNext}) => {
   
const mostrar_prev = () =>{
    onPrevious();
}



const mostrar_next = () =>{
    onNext();
}

  return (
    <nav className='mt-5'>
        <ul className='pagination justify-content-center'>
            {
                prev ? 
                (<li className='page-item'>
                 <button className='page-link' onClick={ mostrar_prev}>
                Previous </button></li>)
                : 
                null
            }
            {
                next ? (
                <li className='page-item'>
                <button className='page-link' onClick={ mostrar_next} >
                    Next</button></li>
                 ):
                null
            }
            
             </ul>
    </nav>
  )
}

export default Pagination
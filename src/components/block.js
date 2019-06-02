import React from 'react';
import './block.css'


const Block = (props) => {
  return <button className=' btn-outline-info container card b1 shadow justify-content-center btn   '>
         <button className='btn btn-lg '>{props.value}</button>
         </button>
}
export default Block;

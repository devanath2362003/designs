import React from 'react'


import table from "../images/table.jpg"
import sofa from "../images/sofa.avif"
import velvet from "../images/velvet sofa.jpeg"
import lamp from "../images/lamp.jpg"
import chair from "../images/chair.jpeg"
import Menu from './Menu'

const Book = () => {
  return (
    <div>
      <div className='c'>
        <h2 className='d'>New Arrivals</h2>
        <h2>Best Sellers</h2>
      </div>
      <div className='j'>
         <div className='e'>
<div className='eid'>
  
<img src={table} className='ei' />

  </div>          
            <p>Handmade Wooden </p>
            <p>Natural Square Foldable...</p>
            <p>$32.00</p>
            <button className='b1'>Add to cart</button>
            
         </div>


         <div className='e'>
            <img src={sofa} className='ei' />
            <p>Ethnicraft Ellipse 3 Seater</p>
            <p>Lounge Sofa</p>
            <p>$130.00</p>
            <button className='b1'>Add to cart</button>

            </div>
         {/* <div className='f'>
            <img src={sofa} className='ei' />
         </div> */}
         <div className='e'>
            <img src={velvet } className='ei' />
            <p>Velvet sofa Button</p>
            <p>Tufted Couch...</p>
            <p>$550.00</p>
            <button className='b1'>Add to cart</button>

            
         </div>
         <div className='e'>
            <img src={lamp} className='ei' />
            <p>FOrm Decorate Living</p>
            <p>Arum Table Lamp</p>
            <p>$50.00</p>
            <button className='b1'>Add to cart</button>

         </div>
         <div className='e'>
            <img src={chair} className='ei' />
            <p>Turn Chair Ferm</p>
            <p>Seater Lounger Chair</p>
            <p>$125.00</p>
            <button className='b1'>Add to cart</button>

         </div>
      {/* <div className='f'></div>
      <div className='g'></div>
      <div className='h'></div>
      <div className='i'></div> */}
      
      
      </div>
    </div>
  )
}

export default Book
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


const Menu = () => {
  return (
    <div>

<ul className='b'>
{/* 
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        shop by Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}


        <li><Button variant="secondary">Shop by Categories</Button></li>
        <li className='l1'><Dropdown className='l2'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></li>
        <li>Categories</li>
        <li>Accessories</li>
        <li>Products</li>
        <li>More</li>
  
      </ul>


    </div>
  )
}

export default Menu
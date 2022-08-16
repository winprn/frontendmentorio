import React from 'react'

const DropDownItems = (props) => {
  return (
    <ul className='dropdown-items'>
        {props.children}
    </ul>
  )
}

export default DropDownItems
import React from 'react'

const DropDownItem = ({ text, icon }) => {
  return (
    <li className='dropdown-item'>
        {icon ? <img src={icon} alt="Icon" /> : <></>}
        <a href="#">
            {text}
        </a>
    </li>
  )
}

export default DropDownItem
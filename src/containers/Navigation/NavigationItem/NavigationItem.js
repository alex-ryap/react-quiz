import React from 'react';
import './NavigationItem.css'

const NavigationItem = props => {
  return (
    <li
      className={'NavigationItem'}
      onClick={() => props.onClick(props.question.id)}
    >
      {props.question.name}
    </li>
  )
}

export default NavigationItem
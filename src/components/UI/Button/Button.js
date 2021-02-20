import React from 'react';
import './Button.css'

const Button = (props) => {

  const classes = [
    'Button',
    props.type ? props.type : '',
  ]

  const iconClasses = [
    'fas',
    props.icon ? props.icon : '',
  ]

  return (
    <button
      className={classes.join(' ')}
      onClick={props.onClick}
    >
      <i className={iconClasses.join(' ')}/>&nbsp;
      { props.children}
    </button>
  )
}

export default Button
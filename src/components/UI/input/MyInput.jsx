import React from 'react'
import classes from "./MyImpt.module.scss"

const MyInput = (props) => {
  return (
    <input className={classes.myImpt} {...props}/>
  )
}

export default MyInput  
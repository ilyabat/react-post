import React from 'react'
import classes from "./MyImpt.module.scss"

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myImpt} {...props} />
    )
})

export default MyInput  
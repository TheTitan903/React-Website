import React from 'react'
const People  = props => {
    console.log(props)
    return(
        <div>
            <a>{props.name} | {props.position}</a>
            <br/>
            <a>{props.email} | {props.phone}</a>
        </div>
    )

}
export default People
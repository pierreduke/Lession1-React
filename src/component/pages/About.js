import React from 'react'

export default function About(props) {
    return (
        <div>
            {props.match.params.id}
            <h1> About Contact Management </h1>
            <p> So? </p>
        </div>
    )
}

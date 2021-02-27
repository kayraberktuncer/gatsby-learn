import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
    return (
        <div style={{ color: `black`, margin: `3rem auto`, maxWidth: 600 }}>
            <h1>{props.headerText}</h1>
            <Link to="/">Home</Link>
            <Link to="/about/">About Page</Link>
            <Link to="/contact/">Contact</Link>
        </div>
    )
}
import React from 'react'
import styled from 'styled-components'

// import './Person.css'

// onClick here allows the child component (person) to change the state of the parent component (App)


const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1 px solid #eee;
    box-shadow: 0 4px 7px #ccc;
    padding: 16px; 
    text-align: center;

@media (min-width: 500px) {
        width: 450px;
}`

const person = props => {
    return (
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old. </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>)
}


export default person;
import { useState } from 'react'

export default function TodoForm({ addTask }){
    const [userInput, setUserInput] =useState('')

    const handleChange = (e) =>{
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Enter your task"/>
            <br/>
            <button>Add task</button>
        </form>
    )
}
import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput)=>{
    if(userInput){
      const newItem = {
        id: Date.now(),
        task: userInput,
        complead: false
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id)=>{
    setTodos([...todos.filter(todo => todo.id !== id)])
  }
  const handleToggle = (id)=>{
    setTodos([...todos.map((todo)=>
      todo.id === id ? {...todo, complead: !todo.complead} : {...todo}
    )])
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask}/>
      {todos.map((todo)=>{
        return <Todo
        key={todo.id} 
        todo={todo}
        toggleTask={handleToggle}
        removeTask={removeTask}/>
      })}
    </div>
  );
}

export default App;

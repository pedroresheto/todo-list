

export default function Todo({todo, toggleTask, removeTask}){
   
    return (
        <div key={todo.id} class="item-todo">
            <div class={todo.complead ? "item-text strike" : "item-text"}
            onClick={()=>{
                toggleTask(todo.id)
            }}>
                <p>{todo.task}</p>
                
            </div>
            <span class="item-delete" onClick={()=>{
                removeTask(todo.id)
            }}> x </span>
        </div>
    );
}
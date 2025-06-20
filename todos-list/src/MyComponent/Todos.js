import TodoItem from "../MyComponent/TodoItem";

const Todos = (props) => {


 return (
  <div className='card my-3'>
    <h2 className='my-3'>ToDos List</h2>
    {props.todos.length === 0 ? (
      "Hurray!! No ToDos to display."
    ) : (
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
}

export default Todos

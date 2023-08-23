import { Todo } from "../App";
import "./Card.css";

type CardProps = {
  todo: Todo;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function Card({ todo, completeTodo, deleteTodo }: CardProps) {
  function handleCompleteTodo() {
    completeTodo(todo.id);
  }
  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }
  return (
    <div className={`card ${todo.completed ? "done" : ""}`}>
      <h2>{todo.title}</h2>
      <div className="card-button">
        <button onClick={handleCompleteTodo}>
          {todo.completed ? "Retomar" : "Completar"}
        </button>
        <button onClick={handleDeleteTodo}>Deletar</button>
      </div>
    </div>
  );
}

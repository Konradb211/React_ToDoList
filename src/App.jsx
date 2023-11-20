import { useState } from "react";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const handleFormShown = () => {
    setIsFormShown(true);
  };

  const [todos, setTodos] = useState([]);

  const addItem = (newTodoName) => {
    setTodos((prevTodos) => [
      { name: newTodoName, done: false, id: Math.random() },
      ...prevTodos,
    ]);
    setIsFormShown(false);
  };

  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addLineItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      }),
    );
  };

  return (
    <div className="inline-block max-w-[800px] rounded-xl bg-white px-6 py-8">
      <header className="flex items-center justify-between gap-[100px]">
        <div>
          <h1 className="text-4xl font-bold">Do zrobnienia</h1>
          <h2 className="text-2xl font-bold">{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={handleFormShown}
            className="bg-skyblue aspect-square w-[50px] cursor-pointer rounded-full text-[30px] text-white  transition-colors hover:bg-sky-600"
          >
            +
          </button>
        )}
      </header>
      {isFormShown && <Form onFormSubmit={addItem} />}
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem
            name={name}
            done={done}
            key={id}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => addLineItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

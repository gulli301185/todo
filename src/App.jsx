import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [data, setData] = useState([]);
  return (
    <>
      <TodoForm data={data} setData={setData} />
      <TodoList data={data}/>
    </>
  );
}

export default App;

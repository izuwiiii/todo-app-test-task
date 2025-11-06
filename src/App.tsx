import "./App.css";
import { useApi } from "./hooks/useApi";

const { getTodo, createTodo } = useApi();

function App() {
  getTodo();
  createTodo();
  getTodo();
  return <h1>Hello</h1>;
}

export default App;

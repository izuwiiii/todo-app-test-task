import { TodoInput } from "../TodoInput";
import { fetchTodos } from "../../features/todos/todosSlice";
import { useAppDispatch } from "../../hooks/useStore";
import { useEffect } from "react";
import { TodoList } from "../TodoList";

export const TodoPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <section className="h-screen pt-28">
      <h1 className="text-3xl font-bold mb-4">Your To Do</h1>
      <TodoInput />
      <TodoList />
    </section>
  );
};

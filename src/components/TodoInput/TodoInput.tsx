import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/useStore";
import { addTodo } from "../../features/todos/todosSlice";

export const TodoInput = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  const inputElement = useRef<HTMLInputElement>(null);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    await dispatch(addTodo(input))
      .then(() => setInput(""))
      .finally(() => inputElement.current?.focus());
  };

  useEffect(() => {
    inputElement.current?.focus();
  }, []);

  return (
    <form className="mb-4 flex items-center" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add new task"
        className="min-w-md border-b-2 pb-1 pl-2 border-[#ced4da] outline-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputElement}
      />
      {!input ? (
        <button className="cursor-pointer bg-[#495057] p-1 rounded ml-2">
          <Plus color="#ced4da" />
        </button>
      ) : (
        <button className="cursor-pointer bg-[#292e32] p-1 rounded ml-2">
          <Plus color="#fff" />
        </button>
      )}
    </form>
  );
};

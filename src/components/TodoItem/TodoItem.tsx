import type { Todo } from "../../types/ITodo";
import { Pencil, X } from "lucide-react";
import { useAppDispatch } from "../../hooks/useStore";
import { deleteTodo, updateTodo } from "../../features/todos/todosSlice";
import { useEffect, useRef, useState } from "react";

export const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useAppDispatch();

  const [isTodoEditing, setIsTodoEditing] = useState(false);
  const [editingTodoTitle, setEditingTodoTitle] = useState(title);
  const input = useRef<HTMLInputElement>(null);

  const handleUpdateTodo = () => {
    if (title === input.current?.value) {
      setIsTodoEditing(false);
      return;
    }
    dispatch(updateTodo({ id, title: editingTodoTitle }));
    setIsTodoEditing(false);
  };

  useEffect(() => {
    input.current?.focus();
  }, [isTodoEditing]);

  return (
    <li className="p-3 px-5 flex justify-between border border-[#ced4da] rounded-2xl min-w-md">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(updateTodo({ id, completed: !completed }))}
          className="w-4 accent-[#ced4da]"
        />
        {isTodoEditing ? (
          <div>
            <input
              type="text"
              value={editingTodoTitle}
              onChange={(e) => setEditingTodoTitle(e.target.value)}
              ref={input}
            />
          </div>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      {isTodoEditing ? (
        <div className="flex gap-2">
          <button
            className="bg-[#ced4da] text-343a40 text-[12px] p-0.5 px-1 rounded cursor-pointer"
            onClick={() => handleUpdateTodo()}
          >
            Confirm
          </button>
          <button
            className="bg-[#343a40] text-white text-[12px] p-0.5 px-1 rounded cursor-pointer"
            onClick={() => setIsTodoEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            className="cursor-pointer"
            onClick={() => setIsTodoEditing(true)}
          >
            <Pencil size={16} />
          </button>

          <button
            className="cursor-pointer"
            onClick={() => dispatch(deleteTodo(id))}
          >
            <X size={16} />
          </button>
        </div>
      )}
    </li>
  );
};

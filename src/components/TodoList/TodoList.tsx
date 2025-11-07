import ReactPaginate from "react-paginate";
import { useAppSelector } from "../../hooks/useStore";
import { TodoItem } from "../TodoItem";
import type { Todo } from "../../types/ITodo";
import { usePagination } from "../../hooks/usePagination";

export const TodoList = () => {
  const { items, loading } = useAppSelector((s) => s.todos);
  const { page, setPage, currentItems, pageCount } = usePagination(items, 5);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {items.length > 0 ? (
        <section>
          <ul className="flex flex-col gap-4">
            {currentItems.map((todo: Todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
          {items.length > 5 && (
            <ReactPaginate
              className="flex justify-center items-center gap-2 mt-4"
              pageClassName="border border-[#ced4da] rounded px-3 py-1 flex items-center cursor-pointer"
              pageLinkClassName="block px-3 py-1 w-full h-full text-center"
              activeClassName="bg-blue-500 text-white"
              nextLabel=">"
              nextClassName="cursor-pointer"
              previousLabel="<"
              previousClassName="cursor-pointer"
              onPageChange={(e) => setPage(e.selected)}
              pageCount={pageCount}
              forcePage={page}
            />
          )}
        </section>
      ) : (
        <h1>Add your first todo!</h1>
      )}
    </>
  );
};

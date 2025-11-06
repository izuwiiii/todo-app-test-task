export const useApi = () => {
  const getTodo = async () =>
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));

  const createTodo = async () =>
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  return { getTodo, createTodo };
};

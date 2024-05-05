import axios from "axios";
import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  //   useEffect is gonna render the components inside whenever this list component is triggered.
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      setTodos(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  // useEffect keeps on making requests to stop that add a dependency array [] so that it runs once.
  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <div className=" min-h-full">
      {todos.length === 0 ? (
        <p className="ml-5 mt-2 font-bold text-2xl font-serif text-amber-400 underline">
          Get Started
        </p>
      ) : (
        <p className="ml-5 mt-2 font-bold text-2xl font-serif text-amber-400 underline">
          Your Checklist:
        </p>
      )}
      <table className=" border-zinc-950 w-3/4 mx-auto table table-success table-striped font-serif text-xl">
        <thead>
          <tr>
            <th scope="col">Tasks</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.description}</td>
                <td>
                  <EditTodo id={i.id} />
                </td>
                <td>
                  <button
                    id={i.id}
                    type="button"
                    onClick={async (i) => {
                      const id = i.target.id;
                      try {
                        const response = await axios.delete(
                          `http://localhost:5000/todos/${id}`
                        );
                        console.log(response.data);
                      } catch (err) {
                        console.error(err.message);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodos;

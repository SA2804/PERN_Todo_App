import React, { useState } from "react";
import axios from "axios";


function InputTodo() {
  const [desc, setDesc] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const todoData = { description: desc };
      const response = await axios.post(
        "http://localhost:5000/todos",
        todoData
      );
      console.log(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <input
          type="text"
          className="quintessential-regular text-xs mr-5 ml-5 border rounded p-2 w-3/4"
          autoComplete="off"
          name="description"
          placeholder="Enter Task"
          value={desc} // State Management
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />
        <button type="submit" className="mr-10 btn btn-success">
          Add
        </button>
      </form>
    </>
  );
}
export default InputTodo;

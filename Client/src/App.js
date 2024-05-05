import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
          <Header name="Todo App ❤️" />
          <InputTodo />
          <ListTodos />
    </>
  );
}

export default App;

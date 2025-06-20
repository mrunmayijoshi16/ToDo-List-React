import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";
import About from "./MyComponent/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
      <Header title="ToDo List" searchBar={false} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="card">
                  <AddTodo addTodo={addTodo} />
                </div>
                <div className="card">
                  <Todos todos={todos} onDelete={onDelete} />
                </div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <div className="card">
                <About />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes(".js")
      ? " need to learn js"
      : null;
    setTodo(inputValue);
    setWarning(updateWarning);
  };
  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} />
      <p>{todo}</p>
      <p>{warning || "good work"}</p>
    </div>
  );
};

export default Todo;

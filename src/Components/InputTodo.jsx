import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, errorMessage } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <input
        disabled={errorMessage}
        placeholder="todo"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={errorMessage} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

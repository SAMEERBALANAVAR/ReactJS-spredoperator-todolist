import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handlChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input type="text" onChange={handlChange} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

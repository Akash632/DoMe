import React, { useState, useEffect } from "react";
import "./Add.css";
function Add({ value, setValue, handleAdd, update, handleUpdate }) {
  return (
    <div className="todo-container">
      <div className="todo-search-container">
        <h1>
          Do what's <span>Right</span> not what's <span>Easy</span>
        </h1>
        <div className="input-form-container">
          <input
            type="text"
            placeholder="Enter the task"
            name="task"
            value={value}
            className="input-field"
            onChange={(e) => setValue(e.target.value)}
          />
          {update ? (
            <button className="input-button" onClick={handleUpdate} >
              Update
            </button>
          ) : (
            <button className="input-button" onClick={handleAdd}>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;

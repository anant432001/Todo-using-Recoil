import React, { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterTermAtom, todoFilter } from "../store/atoms/todo";

export function FilteredTodos() {
  console.log("FilteredTodo rendered");
  const inputRef = useRef(null);

  const setFilterTerm = useSetRecoilState(filterTermAtom);
  const filteredTodos = useRecoilValue(todoFilter);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Filter"
        onChange={() => {
          setFilterTerm(inputRef.current.value);
        }}
      />
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.id+": "+todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

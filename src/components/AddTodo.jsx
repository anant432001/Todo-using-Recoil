import { useRef } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todo";

export function AddTodo() {
  console.log("AddTodo rendered");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const [todo, setTodo] = useRecoilState(todoAtom);

  function onclickHandler() {
    setTodo([
      ...todo,
      {
        id: parseInt(todo.length) + 1,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      },
    ]);
  }

  return (
    <div>
      <input ref={titleRef} type="text" placeholder="Enter Title" />
      <input ref={descriptionRef} type="text" placeholder="Enter Description" />
      <br></br>
      <button onClick={onclickHandler}>Add Todo</button>
    </div>
  );
}

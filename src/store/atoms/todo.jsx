import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: []
});

export const filterTermAtom = atom({
  key: "filterTermAtom",
  default: ""
});

export const todoFilter = selector({
  key: "todoFilter",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filterTerm = get(filterTermAtom).toLowerCase();
    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(filterTerm) ||
        todo.description.toLowerCase().includes(filterTerm)
    );
  }
});

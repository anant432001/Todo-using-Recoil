import { AddTodo } from "./components/AddTodo";
import {FilteredTodos} from './components/FilteredTodos';
import { RecoilRoot } from "recoil";
import './App.css'

function App() {
  return (
    <div className="container">
      <RecoilRoot>
        <AddTodo />
        <FilteredTodos/>
      </RecoilRoot>
    </div>
  );
}

export default App;

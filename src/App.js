import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  let getItem = JSON.parse(localStorage.getItem("toDos"));
  if (!getItem) {
    getItem = [];
  }
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(getItem);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <div></div>
      <h1>To Do List</h1>

      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          placeholder="오늘 할 일은?"
        ></input>
        <button>입력!</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li className={styles.list} key={index}>
            <input type="checkbox" />
            {item}
            <button>"🗑"</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

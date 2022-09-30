import { useEffect, useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  let getItem = JSON.parse(localStorage.getItem("toDos"));
  if (!getItem) {
    getItem = [];
  }

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(getItem);

  const onChange = (event) => {
    const userToDo = {
      text: event.target.value,
      id: Date.now(),
    };
    setToDo(userToDo);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    console.log(toDo);
    setToDo("");
  };

  const onDelete = (event) => {
    const list = event.target.parentNode;

    setToDos((currentArray) =>
      currentArray.filter((toDo) => toDo.id !== parseInt(list.id))
    );
  };

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do List</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          value={toDo.text || ""}
          onChange={onChange}
          placeholder="입력 후 엔터 또는 연필 클릭!"
        ></input>
        <button className={styles.toDoBtn}>✏️</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li className={styles.list} key={index} id={item.id}>
            <input className={styles.checkBox} type="checkbox" />
            <span>{item.text}</span>
            <button className={styles.xBtn} onClick={onDelete}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

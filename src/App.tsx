import axios from "axios";
import { useState } from "react";
// import { Practice1 } from "./practices/Practice1";
// import { Practice2 } from "./practices/Practice2";
// import { Practice3 } from "./practices/Practice3";
// import { Practice4 } from "./practices/Practice4";
import "./styles.css";
import { Todo } from "./practices/Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "テストネーム",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    // <div className="App">
    //   <Practice1 />
    //   <Practice2 />
    //   <Practice3 />
    //   <Practice4 />
    // </div>
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

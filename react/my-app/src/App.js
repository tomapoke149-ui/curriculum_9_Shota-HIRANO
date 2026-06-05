import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(""); // 今回追加する「年齢」

  const handleSubmit = (submit) => {
    submit.preventDefault(); // 画面がリロードされてしまうのを防ぐ
    console.log("onSubmit: ", name, email, age); // 入力されたデータをコンソールに表示
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
          
          <label>Name: </label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <label>Email: </label>
          <input
            type={"email"}
            style={{ marginBottom: 20 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* ▼ 追加した年齢の入力欄 ▼ */}
          <label>Age: </label>
          <input
            type={"number"}
            style={{ marginBottom: 20 }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          
          <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();
    console.log("onSubmit: ", name, email, age);
  };

  return (
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

        <label>Age: </label>
        <input
          type={"number"}
          style={{ marginBottom: 20 }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        
        <button type={"submit"}>Submit</button>
    </form>
  );
}

// 他のファイルからこの部品を呼び出せるようにエクスポートする
export default Form;
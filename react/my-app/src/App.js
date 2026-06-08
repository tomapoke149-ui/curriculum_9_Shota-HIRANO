import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      {/* ▼ titleという名前で、Form部品に「ユーザー登録フォーム」という文字を渡す ▼ */}
      <Form title="ユーザー登録フォーム" />
      
    </div>
  );
}

export default App;
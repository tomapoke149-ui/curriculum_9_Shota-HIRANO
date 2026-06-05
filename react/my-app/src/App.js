import logo from "./logo.svg";
import "./App.css";
import Form from "./Form"; // ① さっき作ったForm部品（コンポーネント）を読み込む

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      {/* ② 読み込んだForm部品をここに配置する */}
      <Form />
    </div>
  );
}

export default App;
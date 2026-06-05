import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // ① Reactの便利機能「useState」を読み込む

function App() {
  // ② countという変数と、それを変更するためのsetCountという関数を作る（初期値は0）
  const [count, setCount] = useState(0); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* ③ 現在のcountの数字を画面に表示する */}
        <p>{count}</p>
        
        {/* ④ ボタンが押されたら、今のcountに+1した数字をセットする */}
        <button onClick={() => setCount(count + 1)}>Button</button>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

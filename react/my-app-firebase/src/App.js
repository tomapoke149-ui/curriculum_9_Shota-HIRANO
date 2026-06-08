import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  // ① まずはDBに「inadaさん（20歳）」のデータを登録する処理（POST）
  const handlePost = async () => {
    await fetch("https://react-curriculum-db9b4-default-rtdb.firebaseio.com/tweets.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "inada", email: "inada@yahoo.co", age: 20 }), 
    });
    alert("データベースに『inadaさん(20歳)』を登録しました！");
  };

  // ② 課題のメイン：DBからデータを取得して、inadaさんの年齢に+10する処理（GET）
  const handleGet = async () => {
    const response = await fetch("https://react-curriculum-db9b4-default-rtdb.firebaseio.com/tweets.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    if (!data) {
      alert("データが空っぽです！先に1番のボタンを押して登録してください。");
      return;
    }

    // データベースから取得したオブジェクトの山から、nameが "inada" の人を探し出す
    const obj = Object.values(data).filter((v) => v.name === "inada")[0];

    if (obj) {
      // 入力欄の仕様や通信の関係で「文字列の"20"」として扱われてしまい、20 + 10 = "2010" になるのを防ぐため、
      // Number() を使って確実に「数値の20」に変換してから計算します。
      setAge(Number(obj.age) + 10);
    } else {
      alert("inadaさんのデータが見つかりませんでした。");
    }
  };

  return (
    <div className="App" style={{ padding: "50px", textAlign: "center" }}>
      <h2>課題1-5：DB通信と非同期処理</h2>
      
      {/* データベースが空だと取得できないため、先にデータを登録するボタン */}
      <button onClick={handlePost} style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}>
        1. テストデータをDBに送信（POST）
      </button>
      <br />
      
      {/* カリキュラムの指示内容：データを取得して計算するボタン */}
      <button onClick={handleGet} style={{ padding: "10px 20px", cursor: "pointer" }}>
        2. データを取得して年齢に+10する（GET）
      </button>

      <h3 style={{ marginTop: "40px" }}>計算結果: {age}</h3>
    </div>
  );
}

export default App;
import Chart from "./pages/chart";
import Customer from "./pages/customer";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NotFound from "./pages/notfound";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // この中に書きます🤗
    console.log("起動しました！！！！！！");

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(response, "response");
        //ここでjsの形に変換するjson()を行なっています🤗
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      } catch (error) { }

      // おまじないの処理の終わり、下は消さない
    };

    // fetchDataを以下で動かします🤗
    fetchData();

    //スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
    // この下は消さない
  }, []);


  return (
    <>
      {/*  */}
      <h1>データを表示する方法</h1>
      {data.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;
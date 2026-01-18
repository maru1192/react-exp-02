import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News'

function App() {
  //inputが二つあるので、入力したものを保持するためにuseStateが2ついります
  const[name, setName] = useState("名前入力")
  const[email, setEmail] = useState("メールアドレス入力")

  //イベント処理＝クリックしたらXXXする、マウスを動かしたらXXXする、マウスが離れたらXXXする、など.....
  const handleleNameChange = (e) => {
    //処理を書きます
    setName(e.target.value);
  }

  const handleleEmailChange = (e) => {
    //処理を書きます
    setEmail(e.target.value);
  }

  useEffect(()=>{
    //この中に書きます
    console.log("起動しました！！！")
    //スプレッドシートAPIの記述を書いて、データを読み込む → 読み込みができたら画面に表示する
    //この下は消さない
  },[])

    console.log("順番の確認")

  return (
    <>
      {/*  */}
    <News />
    <div>
      <p>名前が入ります</p>
      <input type="text" 
        placeholder='名前を入力してください' 
        value={name}
        onChange={handleleNameChange} />
    </div>

    <div>
      <p>メールアドレスが入ります</p>
      <input type="text" 
        placeholder='メールアドレスを入力してください' 
        value={email}
        onChange={handleleEmailChange} />
    </div>

      {/*  */}
    </>
  )
}

export default App

import "./App.css";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { SubHead } from "./components/SubHead.jsx";
import { Content } from "./components/Content.jsx";
import { SignLog } from "./components/SignLog.jsx";
import { LogSign } from "./components/LogSign.jsx";
import { Model } from "./components/Model.jsx";
import { useState } from "react";

function App() {
  const [login, setlogin] = useState(0);
  const [islogin, setislogin] = useState(false);
  return (
    <>
      <Header setlogin={setlogin} islogin={islogin} />
      <Hero />
      <br />
      <SubHead islogin={islogin} />
      <br />
      <Content islogin={islogin} />
      {login === 1 ? <Model setlogin={setlogin} /> : <></>}
      {login === 1 ? <SignLog login={login} setlogin={setlogin} /> : <></>}

      {login === 2 ? <Model setlogin={setlogin} /> : <></>}
      {login === 2 ? (
        <LogSign setislogin={setislogin} login={login} setlogin={setlogin} />
      ) : (
        <></>
      )}
      <br />
    </>
  );
}

export default App;

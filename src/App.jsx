//npm i react-router-dom

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Main from "./pages/Main";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  const [account,setAccount]=useState("");

  return (
        <BrowserRouter>
        <div>
          <Routes>
            {/* "/" 현재 페이지 출력 */}
            <Route path="/" element={<Main account={account} setAccount={setAccount} />} />
            {/* ////////////////////*/}         
            <Route path="/student" element={<Student account={account} setAccount={setAccount}/>} />
            <Route path="/teacher" element={<Teacher account={account} setAccount={setAccount} />} />       
          </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;

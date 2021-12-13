import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Main,
  Account,
  Home,
  Profile,
  PostNew,
  PostEdit,
  FollowPage,
  MessagePage,
} from "./pages/index";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<PostNew />} />
          <Route path="/edit" element={<PostEdit />} />
          <Route path="/follow" element={<FollowPage />} />
          <Route path="/msg" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

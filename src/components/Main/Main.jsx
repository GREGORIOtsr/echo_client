import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LogIn from "./LogIn";
import SignUp from './SignUp';
import Home from './Home';
import Profile from './Profile';
import Settings from "./Settings";

const Main = () => {

  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <main>
      <Routes>
        <Route path="/login" element={!user ? <LogIn /> : <Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </main>
  );
};

export default Main;

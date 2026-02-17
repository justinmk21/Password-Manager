import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import "./styles/GlobalUse.css";
import AddPassword from "./pages/AddPassword";
import Generate from "./pages/GenerateView";
import PasswordDetail from "./pages/PasswordDetails";
import Update from "./pages/UpdatePage";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import OnePass from "./pages/OnePass";
import { LuLockKeyhole } from "react-icons/lu";

function App() {
  function Logout() {
    return <Navigate to={"/login"} />;
  }

  return (
    <BrowserRouter>
      <Header icon={<div><LuLockKeyhole size={42} color="#FF6464" /></div>} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-password"
          element={
            <ProtectedRoute>
              <AddPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/generate"
          element={
            <ProtectedRoute>
              <Generate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password-detail/:id"
          element={
            <ProtectedRoute>
              <PasswordDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <ProtectedRoute>
              <Update />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/onepass" element={<OnePass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Maain from "./Pages/Maain";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import './Styles/Style.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Maain />
              </ProtectedRoute>
            }
          />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

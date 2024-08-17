// App.js
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // State to manage user authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to simulate login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to simulate logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  // useEffect to navigate based on login status
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to home if logged in
    } else {
      navigate("/login"); // Navigate to login if logged out
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      <NavBar logout={logout} />
      <Outlet context={login} />
    </div>
  );
}

export default App;

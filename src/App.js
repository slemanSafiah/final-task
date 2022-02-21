import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/userContext";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Main-page" element={<MainPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

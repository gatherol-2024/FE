import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import "./App.css";
import Main from "./pages/main";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

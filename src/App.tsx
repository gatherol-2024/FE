import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import "./App.css";
import Main from "./pages/main";
import BoardDetail from "./components/board";
import VoicePage from "./pages/voice";
import styled from "styled-components";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<BoardDetail />} />
          <Route path="/voice" element={<VoicePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

const Layout = styled.div`
  flex: 1;
  display: flex;
`;
export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import "./App.css";
import Main from "./pages/main";
import VoicePage from "./pages/voice";
import styled, { ThemeProvider } from "styled-components";
import { useThemeValueStore } from "./store/theme";
import { dark, light } from "./design-token/color";
import BoardDetail from "./pages/board";
import LoginPage from "./pages/login";
function App() {
  const theme = useThemeValueStore();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board/detail/:id" element={<BoardDetail />} />
            <Route path="/voice" element={<VoicePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Layout = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: 0.3s;
`;
export default App;

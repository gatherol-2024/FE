import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import "./App.css";
import Main from "./pages/main";
import BoardDetail from "./components/board";
import VoicePage from "./pages/voice";
import styled, { ThemeProvider } from "styled-components";
import { useThemeValueStore } from "./store/theme";
import { dark, light } from "./design-token/color";
function App() {
  const theme = useThemeValueStore();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
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

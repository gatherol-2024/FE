import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import VoicePage from "./pages/voice";
import styled, { ThemeProvider } from "styled-components";
import { useThemeValueStore } from "./store/theme";
import { dark, light } from "./design-token/color";
import BoardDetail from "./pages/board";
import LoginPage from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftSideBar from "./components/shared/sidebar/left";
import RightSideBar from "./components/shared/sidebar/right";
import { ModalProvider } from "styled-react-modal";
import { CookiesProvider } from "react-cookie";

function App() {
  const theme = useThemeValueStore();
  return (
    <CookiesProvider>
      <ThemeProvider theme={dark}>
        <ModalProvider>
          <BrowserRouter>
            <LeftSideBar />
            <Layout>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/board/detail/:id" element={<BoardDetail />} />
                <Route path="/voice" element={<VoicePage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Layout>
            <RightSideBar />
          </BrowserRouter>
          <ToastContainer limit={1} />
        </ModalProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

const Layout = styled.div`
  padding: 1.5rem;
  flex: 1;
  background-color: ${({ theme }) => theme.background100};
  color: ${({ theme }) => theme.text};
  transition: 0.3s;
`;
export default App;

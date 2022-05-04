import "./App.css";
import { DataContextProvider } from "./context/index";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-100">
      <DataContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path={"/"} element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;

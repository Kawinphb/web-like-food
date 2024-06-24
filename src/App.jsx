import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./component/page/MainPage";
import ShowFavoritePage from "./component/page/ShowFavoritePage";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="list-favorite" element={<ShowFavoritePage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

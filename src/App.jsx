import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Games from "./pages/Games";
import GameCard from "./pages/GameCard";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/game/:id" element={<GameCard />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;

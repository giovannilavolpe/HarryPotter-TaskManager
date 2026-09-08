
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useUsernameStore } from "./context/ContextAuth";
import Auth from "./pages/auth/Auth";
import HomeScreen from './pages/homescreen/HomeScreen';
import { CharacterDetailsCardList } from "./components/CardsDetails";

export default function App (){
    const isLoggedIn = useUsernameStore((state) => state.isLoggedIn);
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={isLoggedIn ? <HomeScreen/> : <Auth/>} />
                <Route path="/pages/homescreen" element={isLoggedIn ? <HomeScreen/> : <Auth/>} />
                <Route path="/character/:id" element={isLoggedIn ? <CharacterDetailsCardList/> : <Auth/>} />
            </Routes>
        </BrowserRouter>
    )
}

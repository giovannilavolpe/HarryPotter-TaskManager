
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useUsernameStore } from "./context/ContextAuth";
import Auth from "./pages/auth/Auth";
import HomeScreen from './pages/homescreen/HomeScreen';
import { CharacterDetailsCardList } from "./components/CardsDetails";
import Settings from "./pages/settings/Settings";
import { useSettingStore } from "./context/ContextSettings";


export default function App (){
    const {backgroundTheme} = useSettingStore()
    const isLoggedIn = useUsernameStore((state) => state.isLoggedIn);
    return(
        <div id = "containterAll" className={backgroundTheme}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={isLoggedIn ? <HomeScreen/> : <Auth/>} />
                <Route path="/pages/homescreen" element={isLoggedIn ? <HomeScreen/> : <Auth/>} />
                <Route path="/character/:id" element={isLoggedIn ? <CharacterDetailsCardList/> : <Auth/>} />
                <Route path="/pages/settings" element={isLoggedIn ? <Settings/> : <Auth/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

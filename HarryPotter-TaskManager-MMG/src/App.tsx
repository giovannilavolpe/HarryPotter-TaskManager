
import Header from "./components/Header";
import { useUsernameStore } from "./context/ContextAuth";
import Auth from "./pages/auth/Auth";
import HomeScreen from './pages/homescreen/HomeScreen';

export default function App (){
    const isLoggedIn = useUsernameStore((state) => state.isLoggedIn);
    return(
        <>
        <Header/>
        <main>
            {!isLoggedIn && <Auth/>}
            {isLoggedIn && <HomeScreen/>}
        </main>
        </>
    )
}

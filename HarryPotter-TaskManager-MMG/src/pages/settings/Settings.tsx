import { useAccountStore } from "../../context/ContextAuth";
import {
    useSettingStore,
    type BackgroundTheme,
    type BorderTheme,
} from "../../context/ContextSettings";

const backgroundThemes: BackgroundTheme[] = [
    "light",
    "dark",
];

const borderThemes: BorderTheme[] = [
    "default",
    "gryffindor",
    "slytherin",
    "hufflepuff",
    "ravenclaw",
];

function Settings() {
    const logout = useAccountStore((state) => state.logout);

    const backgroundTheme = useSettingStore(
        (state) => state.backgroundTheme
    );
    const setBackgroundTheme = useSettingStore(
        (state) => state.setBackgroundTheme
    );

    const borderTheme = useSettingStore(
        (state) => state.borderTheme
    );
    const setBorderTheme = useSettingStore(
        (state) => state.setBorderTheme
    );

    return (
        <div >
            <h3>Background Theme</h3>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", width: "100%", justifyContent: "space-evenly" }}>

                <button
                    key={"light"}
                    type="button"
                    onClick={() => setBackgroundTheme("light")}
                    style={{backgroundColor: "white", color: "black", width: "150px", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                >
                    Lumus!
                </button>
                                <button
                    key={"dark"}
                    type="button"
                    onClick={() => setBackgroundTheme("dark")}
                    style={{backgroundColor: "black", color: "white", width: "150px", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                >
                    Nox!
                </button>
            </div>

            <h3>Border Theme</h3>

            <div style={{ display: "flex", flexDirection: "row", gap: "20px", width: "100%", justifyContent: "space-evenly" }}>
            {borderThemes.map((theme) => (
                <button
                key={theme}
                type="button"
                onClick={() => setBorderTheme(theme)}
                className= {theme}
                style={{width: "150px", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                >
                    {theme}
                </button>
            ))}
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "60px" }}> 
            <button className = {borderTheme} type="button" onClick={logout} style={{ borderRadius: "5px", width: "150px", height: "50px", fontSize: "20px", marginBottom: "650px"}}>
                Log out
            </button>
            </div>

        </div>
    );
}

export default Settings;

import { useAccountStore } from "../../context/ContextAuth";
import {
    useSettingStore,
    type BorderTheme,
} from "../../context/ContextSettings";


const borderThemes: BorderTheme[] = [
    "gryffindor",
    "slytherin",
    "hufflepuff",
    "ravenclaw",
];

function Settings() {
    const logout = useAccountStore((state) => state.logout);

    const setBackgroundTheme = useSettingStore(
        (state) => state.setBackgroundTheme
    );

    const setBorderTheme = useSettingStore(
        (state) => state.setBorderTheme
    );

    function logoutHandler (){
        logout();
        setBackgroundTheme ("dark");
        setBorderTheme ("gryffindor")
    }
    return (
        <div className="{th}" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', marginTop: '100px'}}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20%', textAlign: 'center', fontFamily: 'fantasy'}}>

                <div style={{ width: 'auto', height: 'auto', border: '1px, solid, grey', borderRadius: '20px', padding: '60px'}}>
                    <h3 style={{ fontSize: '30px' }}>Background Theme</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", justifyContent: "space-evenly" }}>
                        <button
                            key={"light"}
                            type="button"
                            onClick={() => setBackgroundTheme("light")}
                            style={{backgroundColor: "white", color: "black", width: "100%", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                            >
                            Lumus  ☀️
                        </button>
                        <button
                            key={"dark"}
                            type="button"
                            onClick={() => setBackgroundTheme("dark")}
                            style={{backgroundColor: "black", color: "white", width: "100%", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                            >
                            Nox  🌙
                        </button>
                    </div>
                </div>

                <div style={{ width: 'auto', height: 'auto', border: '1px, solid, grey', borderRadius: '20px', padding: '60px'}}>
                    <h3 style={{ fontSize: '30px' }}>Border Theme</h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", justifyContent: "space-evenly" }}>
                    {borderThemes.map((theme) => (
                        <button
                            key={theme}
                            type="button"
                            onClick={() => setBorderTheme(theme)}
                            className= {theme}
                            style={{width: "100%", height: "30px", borderRadius: "5px", fontSize: "20px"}}
                            >
                                {theme}
                        </button>
                    ))}
                    </div>
                </div>

            </div>


            <div style={{ width: "100%", display: "flex", justifyContent: "center"}}> 
                <button type="button" onClick={() => logoutHandler()} style={{ borderRadius: "10px", width: "150px", height: "50px", fontSize: "20px", backgroundColor: '#a90101', marginBottom: '250px', marginTop: '100px'}}>
                    Log out
                </button>
            </div>

        </div>
    );
}

export default Settings;

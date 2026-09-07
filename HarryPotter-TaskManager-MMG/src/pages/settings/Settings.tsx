import { useUsernameStore } from "../../context/ContextAuth";
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

function Auth() {
    const logout = useUsernameStore((state) => state.logout);

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
        <div>
            <h3>Background Theme</h3>

            {backgroundThemes.map((theme) => (
                <button
                    key={theme}
                    type="button"
                    onClick={() => setBackgroundTheme(theme)}
                    className={backgroundTheme === theme ? "selected" : ""}
                >
                    {theme}
                </button>
            ))}

            <h3>Border Theme</h3>

            {borderThemes.map((theme) => (
                <button
                    key={theme}
                    type="button"
                    onClick={() => setBorderTheme(theme)}
                    className={borderTheme === theme ? "selected" : ""}
                >
                    {theme}
                </button>
            ))}

            <button type="button" onClick={logout}>
                Log out
            </button>

        </div>
    );
}

export default Auth;

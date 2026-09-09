import '../../context/ContextAuth'
import { useAccountStore} from '../../context/ContextAuth'
import { useSettingStore } from '../../context/ContextSettings'

function Auth() {
  const email = useAccountStore((state) => state.email)
  const setEmail = useAccountStore((state) => state.setEmail)
  const password = useAccountStore((state) => state.password)
  const setPassword = useAccountStore((state) => state.setPassword)
  const login = useAccountStore((state) => state.login)
  const error = useAccountStore((state) => state.error);
  const {backgroundTheme, borderTheme} = useSettingStore();


  return(
    <div style={{
      background: 'linear-gradient(#000000, #840303)',
      height: '95vh',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"

    }}>
        <h2 style={{
          color: 'white',
          fontSize: '40px',
          fontFamily: 'cursive',
          letterSpacing: '5px'
        }}>Log in to get started</h2>
        <div style={{
          display: "flex",
          flexDirection:"column",
          alignSelf: 'center',

        }}>
        <input  className= {backgroundTheme}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  margin: "1rem 0rem",
                  padding: "1rem",
                  borderRadius: "1rem"
                }}
            />
            <input
                className= {backgroundTheme}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  margin: "1rem 0rem",
                  padding: "1rem",
                  borderRadius: "1rem"
                }}
            />
            {error && <p style={{ color: 'white' }}>{error}</p>}
        <button onClick={login} 
                className= {borderTheme}
                style={{
                  border: 'none',
                  borderRadius: '5px',
                  boxShadow: '0px 1px 8px rgba(255, 255, 255, 0.6)',
                  width: '80px',
                  height: '32px',
                  margin: "1rem 0rem",
                }}>Log in</button>
                </div>


    </div>
  )
}

export default Auth
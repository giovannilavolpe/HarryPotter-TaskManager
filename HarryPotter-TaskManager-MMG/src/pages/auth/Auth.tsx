import '../../context/ContextAuth'
import { useUsernameStore} from '../../context/ContextAuth'

function Auth() {
  const username = useUsernameStore((state) => state.username)
  const setUsername = useUsernameStore((state) => state.setusername)
  const login = useUsernameStore((state) => state.login)
  const error = useUsernameStore((state) => state.error);


  return(
    <div style={{
      background: 'linear-gradient(#000000, #840303)',
      textAlign: 'center',
      height: '95vh'
    }}>
        <h2 style={{
          color: 'white',
          fontSize: '40px',
          fontFamily: 'cursive',
          letterSpacing: '5px'
        }}>Log in to get started</h2>
        <input
                type="text"
                placeholder="Ingrese su nombre"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  border: 'none',
                  borderRadius: '5px',
                  boxShadow: '0px 1px 8px rgba(255, 255, 255, 0.6)',
                  width: '250px',
                  height: '30px'
                }}

            />
            {error && <p style={{ color: 'white' }}>{error}</p>}
        <button onClick={login} style={{
                  border: 'none',
                  borderRadius: '5px',
                  boxShadow: '0px 1px 8px rgba(255, 255, 255, 0.6)',
                  width: '80px',
                  height: '32px'
                }}>Log in</button>


    </div>
  )
}

export default Auth
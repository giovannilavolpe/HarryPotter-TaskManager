import '../../context/ContextAuth'
import { useAccountStore} from '../../context/ContextAuth'

function Auth() {
  const email = useAccountStore((state) => state.email)
  const setEmail = useAccountStore((state) => state.setEmail)
  const password = useAccountStore((state) => state.password)
  const setPassword = useAccountStore((state) => state.setEmail)
  const login = useAccountStore((state) => state.login)
  const error = useAccountStore((state) => state.error);


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
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
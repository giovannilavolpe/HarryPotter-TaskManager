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
    <div>
        <h2>Log in to get Started</h2>
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
            {error && <p className="error">{error}</p>}
        <button onClick={login}>Log in</button>


    </div>
  )
}

export default Auth
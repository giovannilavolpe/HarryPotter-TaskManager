import '../../context/ContextAuth'
import { useUsernameStore} from '../../context/ContextAuth'

function Auth() {
  const username = useUsernameStore((state) => state.username)
  const setUsername = useUsernameStore((state) => state.setusername)
  const login = useUsernameStore((state) => state.login)
  const error = useUsernameStore((state) => state.error);


  return(
    <div>
        <h2>Log in to get Started</h2>
        <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
        <button onClick={login}>Log in</button>


    </div>
  )
}

export default Auth
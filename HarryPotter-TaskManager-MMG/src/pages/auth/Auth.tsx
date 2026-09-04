import './ContextAuth'
import { useUsernameStore} from './ContextAuth'

function Auth() {
  const username = useUsernameStore((state) => state.username)
  const setUsername = useUsernameStore((state) => state.setusername)
  const login = useUsernameStore((state) => state.login)


  return(
    <div>
        <h2>Log in to get Started</h2>
        <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        <button onClick={login}>Log in</button>


    </div>
  )
}

export default Auth
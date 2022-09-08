import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

const Login = ({ setAnimes }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        setAnimes(null)
    }

    return (
        <form className='text-center flex-col' onSubmit={handleSubmit}>
            <h2 className="text-4xl m-5">Login</h2>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs my-5"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs mb-8"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <button className='btn btn-info' disabled={isLoading}>Login</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login
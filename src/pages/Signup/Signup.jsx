import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className='text-center flex-col' onSubmit={handleSubmit}>
            <h2 className="text-4xl m-5">Sign Up</h2>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs mt-5"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <input
                    type="username"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs my-5"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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

            <button className='btn btn-info' disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup
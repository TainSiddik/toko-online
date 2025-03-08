import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Register"
    }, [])

    const handleRegister = async (e) => {
        e.preventDefault()
        setMessage('')

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password,
                confPassword
            })
            toast.success(response.data.message)
            setTimeout(() => {
                navigate('/login');
            }, 1500)
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message); // Tampilkan pesan error
            } else {
                setMessage("Terjadi kesalahan, silakan coba lagi.")
            }
        } finally {
            setEmail('')
            setPassword('')
        }
    }


    return (
        <>
            <div className="grid place-items-center w-screen h-screen bg-bg-primary font-roboto text-white">
                <div className="register">
                    <div className="logo grid place-items-center">
                        <h1 className="text-2xl font-semibold">Buat Akun</h1>
                    </div>
                    <div className="input w-64 pt-4 pb-5 ring-2 ring-teal-200 rounded-md mt-4">
                        {message && <p className="text-teal-200 mt-2 text-center">{message}</p>}
                        <form className="grid justify-items-center" onSubmit={handleRegister}>
                            <div className="username">
                                <label htmlFor="username">Username </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="username"
                                    className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200"
                                    placeholder="user@gmail.com" />
                            </div>
                            <div className="email mt-4">
                                <label htmlFor="email">Email </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200"
                                    placeholder="user@gmail.com" />
                            </div>
                            <div className="password mt-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200"
                                    placeholder="*********" />
                            </div>
                            <div className="confPassword mt-4">
                                <label htmlFor="confPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    value={confPassword}
                                    onChange={(e) => setConfPassword(e.target.value)}
                                    id="confPassword"
                                    className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200"
                                    placeholder="*********" />
                            </div>
                            <div className="btnLogin w-full px-7 mt-8">
                                <button type="submit" className="ring-2 ring-teal-200 bg-teal-500 bg-opacity-0 w-full rounded-md py-0.5 hover:bg-opacity-90 transition-all duration-300 ease-in-out">Register</button>
                            </div>
                        </form>
                        <hr className="mx-7 mt-6 border-teal-200" />
                        <div className="register text-sm font-light mt-4 grid justify-items-center">
                            <Link to={'/login'}>Sudah punya akun ? <span className="font-medium hover:text-teal-200">Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register
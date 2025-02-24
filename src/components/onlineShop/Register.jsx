import { Link } from "react-router-dom"

const Register = () => {
    return (
        <>
            <div className="grid place-items-center w-screen h-screen bg-bg-primary font-roboto text-white">
                <div className="register">
                    <div className="logo grid place-items-center">
                        <h1 className="text-2xl font-semibold">Buat Akun</h1>
                    </div>
                    <div className="input w-64 pt-4 pb-5 ring-2 ring-teal-200 rounded-md mt-4">
                        <form className="grid justify-items-center">
                            <div className="username">
                                <label htmlFor="username">Username </label>
                                <input type="text" id="username" className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200" placeholder="user@gmail.com" />
                            </div>
                            <div className="email mt-4">
                                <label htmlFor="email">Email </label>
                                <input type="email" id="email" className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200" placeholder="user@gmail.com" />
                            </div>
                            <div className="password mt-4">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200" placeholder="*********" />
                            </div>
                            <div className="confPassword mt-4">
                                <label htmlFor="confPassword">Confirm Password</label>
                                <input type="password" id="confPassword" className="block mt-2 px-2 py-0.5 rounded-md ring-2 bg-teal-500 bg-opacity-0 ring-teal-200 outline-none placeholder:text-slate-200" placeholder="*********" />
                            </div>
                            <div className="btnLogin w-full px-7 mt-8">
                                <button className="ring-2 ring-teal-200 bg-teal-500 bg-opacity-0 w-full rounded-md py-0.5 hover:bg-opacity-90 transition-all duration-300 ease-in-out">Register</button>
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
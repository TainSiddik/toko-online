import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="navbar font-roboto">
                {/* desktop navbar */}
                <div className="desktop flex justify-between items-center text-white bg-bg-primary py-2 px-8 md:px-16">
                    <div className="menu hidden md:flex">
                        <ul className="flex gap-8">
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? "text-teal-100" : "text-white"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/produk'} className={({ isActive }) => isActive ? "text-teal-100" : "text-white"}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-teal-100" : "text-white"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-teal-100" : "text-white"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <h1 className="text-2xl font-semibold">CariApaDek</h1>
                    </div>
                    <div className="login hidden bg-white px-4 md:flex items-center rounded-md ring-2 ring-teal-100">
                        <Link to={'/login'} className="text-teal-500">Login</Link>
                    </div>
                    <div className="btnNav flex md:hidden">
                        <Link><i className="fa-solid fa-bars text-xl"></i></Link>
                    </div>
                </div>
                {/* end of desktop navbar */}

                <div className="mobile">

                </div>
            </div>
        </>
    )
}
export default Navbar
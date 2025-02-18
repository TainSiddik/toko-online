import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="navbar font-roboto">
                {/* desktop navbar */}
                <div className="desktop flex justify-between items-center text-white bg-bg-primary py-2 px-16">
                    <div className="menu">
                        <ul className="flex gap-8">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Products</Link>
                            </li>
                            <li>
                                <Link to={'#'}>About</Link>
                            </li>
                            <li>
                                <Link to={'#'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <h1 className="text-2xl font-semibold">LookingFor</h1>
                    </div>
                    <div className="login bg-white px-4 flex items-center rounded-md ring-2 ring-teal-100">
                        <Link className="text-teal-500">Login</Link>
                    </div>
                    <div className="btnNav">
                        <Link><i class="fa-solid fa-bars text-xl"></i></Link>
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
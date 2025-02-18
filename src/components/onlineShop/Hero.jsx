import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
            <div className="hero font-roboto md:flex justify-around items-center">
                <div className="left ">
                    <h1 className="text-xl">Welcome to <span className="text-teal-500 text-3xl font-semibold">LookingFor</span></h1>
                    <p className="pt-4">Find your best fashion Here</p>
                    <h3 className="text-2xl pt-8">Discount up to</h3>
                    <h1 className="text-7xl text-teal-500">90%</h1>
                    <div className="link bg-teal-500 bg-opacity-10 px-8 py-1 rounded-md ring-2 ring-teal-300 text-center text-teal-500 mt-4 hover:text-white hover:bg-opacity-100">
                        <Link>Find your items</Link>
                    </div>
                </div>

                <div className="right w-1/2 flex justify-center relative text-teal-500 px-4">
                    <img src="../public/img/banner.webp" alt="" className="w-64" />
                    <div className="shirt absolute mt-20 mr-60">
                        <img src="../public/img/tshirt.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                    <div className="glasses absolute mt-32 ml-64">
                        <img src="../public/img/glasses.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                    <div className="bag absolute mt-44 mr-96">
                        <img src="../public/img/bag.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                    <div className="watch absolute mt-60 ml-96">
                        <img src="../public/img/watch.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                    <div className="pants absolute mt-72 mr-80">
                        <img src="../public/img/pants.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                    <div className="shoes absolute mt-[350px] ml-64">
                        <img src="../public/img/shoes.webp" alt="" className="w-12 h-12 object-fill rounded-full ring-2 ring-teal-400" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero
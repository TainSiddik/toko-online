import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Produk = ({ selectedCategory }) => {

    const [produk, setProduk] = useState([])

    const getProduk = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/produk')
            setProduk(response.data)
        } catch (error) {
            console.log(`Get all data produk has failed ${error}`)
        }
    }

    useEffect(() => {
        document.title = "Produk";
        getProduk()
    }, [])

    // Filter produk berdasarkan kategori yang dipilih
    const filteredProduk = selectedCategory
        ? produk.filter((p) => p.kategori.kategori === selectedCategory)
        : produk;

    return (
        <>
            <div className="sidebar w-full ring-2 ring-teal-500 px-3 py-2 rounded-md font-roboto">
                <div className="kategori flex gap-4 items-center">
                    <i className="fa-solid fa-bars text-xl text-teal-500 flex md:hidden"></i>
                    <h1 className="font-semibold text-teal-500">
                        {selectedCategory ? `${selectedCategory}` : "Semua Kategori"}
                    </h1>
                </div>
                <hr className="mt-2 border-teal-500" />

                <div className="listProduk pt-4 pb-2 text-black font-roboto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {filteredProduk.map((p) => (
                            <div className="card" key={p.id}>
                                <Link to={`/produk/${p.kategori_id}/${p.id}`} className="group border border-teal-300 rounded-md relative block overflow-hidden">
                                    <img
                                        src={p.gambar[p.gambar.length - 1].url}
                                        alt=""
                                        className="h-36 w-full object-fill transition duration-500 group-hover:scale-105 md:h-40 lg:h-52"
                                    />
                                    <div className="kategori mr-4 w-36 text-center text-xs bg-teal-500 mt-4 rounded-r-md">
                                        <h5 className="text-white px-1">{p.kategori.kategori}</h5>
                                    </div>
                                    <div className="harga mx-2 mt-3">
                                        <h1 className="text-red-500 font-semibold">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.harga)}
                                        </h1>
                                    </div>
                                    <div className="namaProduk relative bg-white mx-2 mt-2">
                                        <h3 className="text-gray-900 text-sm">{p.produk.length > 20 ? p.produk.slice(0, 20) + "..." : p.produk}</h3>
                                    </div>
                                    <div className="terjual mt-4 mb-2 mx-2">
                                        <p className="text-xs text-slate-500">Terjual : {p.terjual ?? 0}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Produk
import { useState, useEffect } from "react"
import axios from "axios"

const Sidebar = ({ onSelectCategory }) => {

    const [getKategori, setGetKategori] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    const kategori = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/kategori')

            // Urutkan kategori berdasarkan abjad (A-Z)
            const sortedKategori = response.data.sort((a, b) =>
                a.kategori.localeCompare(b.kategori)
            )

            setGetKategori(sortedKategori)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        kategori()
    }, [])

    // Fungsi untuk mengubah kategori yang dipilih
    const handleCategoryClick = (kategori) => {
        setSelectedCategory(kategori) // Simpan kategori aktif
        onSelectCategory(kategori) // Kirim ke parent (Produk.js)
    }

    return (
        <>
            <div className="sidebar w-36 ring-2 ring-teal-500 px-2 py-2 rounded-md font-roboto">
                <h1 className="font-semibold text-teal-500">Kategori</h1>
                <hr className="mt-2 border-teal-500" />

                <div className="listKategori pt-4 text-black">
                    <div className="btnKategori pt-2 text-xs">
                        <button onClick={() => handleCategoryClick(null)} className={`hover:text-teal-500 ${selectedCategory === null ? "text-teal-500 font-semibold" : ""
                            }`}>
                            Semua Kategori
                        </button>
                    </div>
                    {getKategori.map((k) => (
                        <div className="btnKategori pt-2 text-xs" key={k.id}>
                            <button onClick={() => handleCategoryClick(k.kategori)} className={`hover:text-teal-500 ${selectedCategory === k.kategori ? "text-teal-500 font-semibold" : ""
                                }`}>
                                {k.kategori}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Sidebar
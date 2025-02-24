import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const Detailproduk = () => {

    const { kategori_id, id } = useParams()
    const [produk, setProduk] = useState([])
    const [selectedImage, setSelectedImage] = useState("")

    const fetchProduk = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/produk/${kategori_id}/${id}`);
            setProduk(response.data)

            // Set default gambar utama ke gambar terakhir dalam array
            if (response.data.gambar && response.data.gambar.length > 0) {
                setSelectedImage(response.data.gambar[response.data.gambar.length - 1].url);
            }
        } catch (error) {
            console.error("Gagal mengambil data produk:", error);
        }
    }

    useEffect(() => {
        document.title = "Detail Produk"
        fetchProduk()
    }, [])

    const [jumlah, setJumlah] = useState(1)
    // Fungsi tambah jumlah
    const tambahJumlah = () => setJumlah((prev) => prev + 1);

    // Fungsi kurangi jumlah, minimal 1
    const kurangJumlah = () => {
        if (jumlah > 1) {
            setJumlah((prev) => prev - 1);
        }
    };

    // Hitung subtotal (harga * jumlah)
    const subTotal = produk.harga ? produk.harga * jumlah : 0;

    return (
        <>
            <div className="detail md:flex justify-between gap-4 font-roboto">
                <div className="image">
                    <div className="img w-[290px] h-[290px] ring-1 ring-teal-500 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={selectedImage} alt="" className="rounded-md w-full h-full object-fill" />
                    </div>
                    <div className="subImg flex gap-4 mt-4">
                        {produk.gambar?.slice().reverse().map((img, index) => (
                            <button className="w-8" key={index} onClick={() => setSelectedImage(img.url)}>
                                <img src={img.url} alt="" className="w-full h-9 rounded-md ring-1 ring-teal-500" />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="info mt-8 md:mt-0">
                    <div className="produk">
                        <h1 className="text-xl font-semibold">{produk.produk}</h1>
                    </div>
                    <div className="kategori w-36 text-white mt-2">
                        <h3 className="text-[12px] px-2 bg-teal-500 ring-2 ring-teal-200 text-center rounded-md">{produk.kategori?.kategori}</h3>
                    </div>

                    <div className="harga mt-4">
                        <h3 className="text-red-500 text-2xl font-semibold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(produk.harga)}</h3>
                    </div>

                    <div className="subInfo mt-4 text-sm flex gap-8">
                        <p>Stok : <span className="font-semibold">{produk.stok}</span></p>
                        <p>Terjual : <span className="font-semibold">{produk.terjual ?? 0}</span></p>
                    </div>
                    <hr className="border-teal-500 mt-1" />


                    <div className="deskripsi mt-4">
                        <h3 className="font-semibold">Deskripsi</h3>
                        <p className="text-sm pt-2">{produk.deskripsi}</p>
                    </div>

                </div>
                <div className="subTotal mt-8 md:mt-0 text-sm">
                    <div className="pembelian ring-2 ring-teal-500 rounded-md px-2 py-2">
                        <h3 className="text-center font-semibold text-lg">Atur Pembelian</h3>
                        <div className="mt-2">
                            <div className="alamat flex gap-4 ">
                                <label htmlFor="alamat">Alamat:</label>
                                <textarea name="" id="" cols="30" rows="10" className="w-full ring-1 ring-teal-500 rounded-md outline-none px-1 py-1 h-16 focus:ring-2"></textarea>
                            </div>
                            <div className="catatan flex gap-3 mt-4">
                                <label htmlFor="alamat">Catatan:</label>
                                <textarea name="" id="" cols="30" rows="10" className="w-full ring-1 ring-teal-500 rounded-md outline-none px-1 py-1 focus:ring-2"></textarea>
                            </div>
                            <div className="jumlah flex gap-4 mt-4">
                                <h3>Jumlah:</h3>
                                <div className="setJum flex gap-4 ring-1 ring-teal-500 rounded-md px-2 py-1 text-lg">
                                    <button onClick={kurangJumlah} className="bg-teal-500 px-2 text-white" disabled={jumlah === 1}>-</button>
                                    <input
                                        type="text"
                                        className="w-12 text-center outline-none"
                                        value={jumlah}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, ""); // Hanya angka
                                            if (value !== "" && parseInt(value) >= 1) {
                                                setJumlah(parseInt(value));
                                            }
                                        }}
                                    />
                                    <button onClick={tambahJumlah} className="bg-teal-500 px-2 text-white">+</button>
                                </div>
                            </div>
                            <div className="subTotal flex gap-2 mt-4">
                                <h1>Sub Total:</h1>
                                <h1 className="text-xl font-semibold text-red-500">
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(subTotal)}
                                </h1>
                            </div>
                            <button className="w-full text-xl text-white  bg-bg-primary px-4 py-1 rounded-md mt-4">Beli</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detailproduk
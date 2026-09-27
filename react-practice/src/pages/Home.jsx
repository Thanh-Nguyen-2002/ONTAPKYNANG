import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCartStore } from '../store/cartStore';

const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
};

export default function Home() {
    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    // Lấy hàm addToCart từ Zustand
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">🏠 Cửa hàng của chúng tôi</h1>

            {isLoading && <p className="text-center text-gray-500 text-xl animate-pulse">Đang tải danh sách sản phẩm... ⏳</p>}
            {isError && <p className="text-center text-red-500 text-xl font-bold">Ôi hỏng rồi: {error.message}</p>}

            {products && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {products.map((product) => (
                        <div key={product.id} className="border border-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition">
                            <div>
                                <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
                                <h2 className="text-lg font-semibold line-clamp-2" title={product.title}>{product.title}</h2>
                                <p className="text-red-500 font-bold mt-2 text-xl">${product.price}</p>
                            </div>

                            <button
                                onClick={() => addToCart(product)}
                                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-bold"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

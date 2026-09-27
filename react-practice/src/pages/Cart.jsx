import { useCartStore } from '../store/cartStore';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCartStore();

    // Tính tổng tiền
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">🛒 Giỏ hàng của bạn</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-xl mt-10">Chưa có sản phẩm nào trong giỏ. Hãy ra trang chủ mua sắm nhé!</p>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <ul className="divide-y divide-gray-200">
                        {cart.map((item) => (
                            <li key={item.id} className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4 w-2/3">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                                    <div>
                                        <h3 className="font-semibold text-lg line-clamp-1" title={item.title}>{item.title}</h3>
                                        <p className="text-gray-500">Đơn giá: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <p className="font-bold text-lg">x{item.quantity}</p>
                                    <p className="font-bold text-red-500 text-lg w-20 text-right">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 font-bold px-2 py-1 bg-red-100 rounded"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-4 border-t border-gray-300 flex justify-between items-center">
                        <button
                            onClick={clearCart}
                            className="text-gray-500 hover:text-red-500 underline"
                        >
                            Xóa tất cả
                        </button>
                        <div className="text-right">
                            <p className="text-gray-600">Tổng cộng:</p>
                            <p className="text-3xl font-bold text-red-500">${totalPrice.toFixed(2)}</p>
                            <button className="mt-2 bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 font-bold text-lg">
                                Thanh Toán Ngay
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

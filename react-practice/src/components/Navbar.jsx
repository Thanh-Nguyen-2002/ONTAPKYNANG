import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
    // Lấy danh sách sản phẩm trong giỏ hàng từ Zustand
    const cart = useCartStore((state) => state.cart);

    // Tính tổng số lượng món hàng
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="flex justify-between items-center bg-blue-600 p-4 text-white shadow-md sticky top-0 z-50">
            <div className="flex gap-6">
                <Link to="/" className="text-xl font-bold hover:text-blue-200 transition">🛍️ Mini Shop</Link>
                <Link to="/" className="text-lg hover:text-blue-200 transition">Trang Chủ</Link>
            </div>
            <div className="flex gap-6 items-center">
                <Link to="/cart" className="text-lg hover:text-blue-200 transition relative">
                    🛒 Giỏ Hàng
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <Link to="/login" className="text-lg bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 transition font-semibold ml-4">
                    Đăng Nhập
                </Link>
            </div>
        </nav>
    );
}

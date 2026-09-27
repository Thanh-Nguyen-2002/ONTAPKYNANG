import { create } from 'zustand';
import { toast } from 'sonner';

export const useCartStore = create((set) => ({
    cart: [], // Mảng chứa các sản phẩm trong giỏ

    // Hàm thêm sản phẩm vào giỏ
    addToCart: (product) => set((state) => {
        // Kiểm tra xem sản phẩm đã có trong giỏ chưa
        const existingItem = state.cart.find(item => item.id === product.id);

        if (existingItem) {
            toast.success(`Đã tăng số lượng: ${product.title}`);
            // Nếu có rồi thì tăng quantity lên 1
            return {
                cart: state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        } else {
            toast.success(`Đã thêm vào giỏ: ${product.title}`);
            // Nếu chưa có thì thêm mới vào mảng kèm quantity: 1
            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            };
        }
    }),

    // Hàm xóa sản phẩm khỏi giỏ
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
    })),

    // Hàm làm sạch giỏ hàng
    clearCart: () => set({ cart: [] })
}));

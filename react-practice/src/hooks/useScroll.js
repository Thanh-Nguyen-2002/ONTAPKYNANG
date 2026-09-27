import { useState, useEffect } from 'react';

/**
 * Custom Hook: useScroll
 * Mục đích: Theo dõi vị trí cuộn chuột hiện tại của trang web (trục Y).
 * Rất hữu ích để làm các hiệu ứng: Đổi màu Navbar khi cuộn xuống, hiện nút "Back to top".
 */
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Đăng ký sự kiện lắng nghe thao tác cuộn chuột
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Xóa sự kiện khi component bị hủy để tránh tràn bộ nhớ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] đảm bảo chỉ đăng ký 1 lần duy nhất lúc mount

  return scrollY;
}

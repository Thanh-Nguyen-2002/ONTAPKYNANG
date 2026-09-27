import { useState, useEffect } from 'react';

/**
 * Custom Hook: useDebounce
 * Mục đích: Trì hoãn việc cập nhật một giá trị thay đổi liên tục (ví dụ: gõ phím).
 * Chỉ cập nhật giá trị CHÍNH THỨC sau khi người dùng ngừng gõ trong một khoảng thời gian (delay).
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Đặt bộ đếm thời gian: Sau `delay` mili-giây thì mới cập nhật state
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Dọn dẹp (Cleanup): Nếu `value` thay đổi TRƯỚC KHI timer chạy xong, 
    // hàm cleanup sẽ hủy cái timer cũ đi và bắt đầu đếm lại từ đầu.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Chạy lại effect nếu value hoặc delay thay đổi

  return debouncedValue;
}

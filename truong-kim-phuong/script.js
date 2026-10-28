
// Chờ nội dung trang sẵn sàng trước khi gắn chức năng FAQ.
document.addEventListener('DOMContentLoaded', function () {
  // Lấy các nút câu hỏi và các mục FAQ tương ứng.
  const nutFaq = document.querySelectorAll('.faq-nut-hoi');
  const cacMucFaq = document.querySelectorAll('.faq-muc');

  if (nutFaq.length === 0) return;

  // Mỗi nút được gắn sự kiện bấm để mở hoặc đóng câu trả lời.
  nutFaq.forEach(function (nut) {
    nut.addEventListener('click', function () {
      const mucDuocChon = nut.parentElement; 
      const seMoMuc = !mucDuocChon.classList.contains('dang-mo'); 

      // Đóng tất cả các mục FAQ khác
      cacMucFaq.forEach(function (muc) {
        muc.classList.remove('dang-mo');
        capNhatDauCong(muc, '+');
      });

      // Mở hoặc đóng mục FAQ được chọn
      if (seMoMuc) {
        mucDuocChon.classList.add('dang-mo');
        capNhatDauCong(mucDuocChon, '−');
      }
    });
  });
});

// Cập nhật dấu cộng/trừ để thể hiện trạng thái FAQ.
function capNhatDauCong(mucFaq, kyHieu) {
  const dauCong = mucFaq.querySelector('.faq-icon-trang-thai');
  if (dauCong) dauCong.textContent = kyHieu;
}

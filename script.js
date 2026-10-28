// HTML dự phòng để vẫn có header nếu không tải được tệp header.html.
const HTML_DU_PHONG_HEADER = `
<header class="phan-dau-trang">
  <div class="hop-header">
    <a href="./truong-kim-phuong/index.html" class="logo-thuong-hieu" title="Trang chủ Chợ Bến Thành">
      <img src="./images/logo-cho-ben-thanh.png" alt="Logo Chợ Bến Thành - Văn Hóa và Nhịp Sống" class="logo-anh-bieu-tuong">
      <div class="logo-chu">
        <h2>Chợ Bến Thành</h2>
        <span>Văn Hóa &bull; Nhịp Sống &bull; Di Sản</span>
      </div>
    </a>
    <nav class="thanh-dieu-huong" aria-label="Menu điều hướng chính">
      <ul>
        <li><a href="./truong-kim-phuong/index.html">Trang Chủ</a></li>
        <li><a href="./truong-kim-phuong/lich-su.html">Lịch Sử</a></li>
        <li><a href="./truong-kim-phuong/kien-truc.html">Kiến Trúc</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/nhip-song.html">Nhịp Sống</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/van-hoa-mua-sam.html">Mua Sắm</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/am-thuc.html">Ẩm Thực</a></li>
        <li><a href="./nguyen-nang-dat/kham-pha.html">Khám Phá</a></li>
        <li><a href="./nguyen-nang-dat/thu-vien.html">Thư Viện</a></li>
        <li><a href="./nguyen-nang-dat/lien-he.html">Liên Hệ</a></li>
      </ul>
    </nav>
  </div>
</header>`;

// HTML dự phòng cho chân trang khi tệp footer.html không tải được.
const HTML_DU_PHONG_FOOTER = `
<footer class="phan-chan-trang">
  <div class="khung-chua hop-footer">
    <div class="cot-footer">
      <h3>Chợ Bến Thành</h3>
      <p>Biểu tượng văn hóa, lịch sử và nhịp sống phương Nam. Đồ án môn học Thiết kế Web (MMC403) của nhóm sinh viên đam mê văn hóa truyền thống.</p>
      <p><strong>Địa chỉ:</strong> Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
    </div>
    <div class="cot-footer">
      <h3>Các Chuyên Đề</h3>
      <ul>
        <li><a href="./truong-kim-phuong/lich-su.html">&bull; Dòng thời gian lịch sử</a></li>
        <li><a href="./truong-kim-phuong/kien-truc.html">&bull; Kiến trúc tháp đồng hồ & 4 cửa</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/nhip-song.html">&bull; Nhịp sống ngày và đêm</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/van-hoa-mua-sam.html">&bull; Văn hóa tiểu thương & mặc cả</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/am-thuc.html">&bull; Thiên đường ẩm thực Bến Thành</a></li>
      </ul>
    </div>
    <div class="cot-footer">
      <h3>Thông Tin Liên Hệ</h3>
      <div id="thong-tin-thanh-vien" class="thong-tin-thanh-vien"></div>
    </div>
  </div>
  <div class="chan-trang-ban-quyen">
    261MMC40305 - Chợ Bến Thành: Văn Hóa và Nhịp Sống. Thiết kế phi thương mại phục vụ học tập.
  </div>
</footer>`;

// Bảng tra tên tệp trang sang thông tin thành viên phụ trách.
const LIEN_HE_THANH_VIEN = {
  'index.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
  'lich-su.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
  'kien-truc.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
  'nhip-song.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
  'van-hoa-mua-sam.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
  'am-thuc.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
  'kham-pha.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com'],
  'thu-vien.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com'],
  'lien-he.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com']
};

// Chờ HTML sẵn sàng rồi mới nạp các phần giao diện dùng chung.
document.addEventListener('DOMContentLoaded', function () {
  napHeader();
  napFooter();
});

// Tải header vào vùng có id site-header.
function napHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  napDoanTrang(header, './header.html', HTML_DU_PHONG_HEADER, function () {
    capNhatMenuHienTai(header);
  });
}

// Tải footer và sau đó điền liên hệ đúng thành viên.
function napFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  napDoanTrang(footer, './footer.html', HTML_DU_PHONG_FOOTER, function () {
    hienThiLienHeThanhVien(footer);
  });
}


// Tải một mảnh HTML; nếu thất bại thì dùng nội dung dự phòng.
function napDoanTrang(vungHienThi, duongDan, noiDungDuPhong, sauKhiNap) {
  fetch(new URL(duongDan, document.baseURI))
    .then(function (phanHoi) {
      if (!phanHoi.ok) throw new Error('Không thể tải ' + duongDan);
      return phanHoi.text();
    })
    .then(function (noiDung) {
      vungHienThi.innerHTML = noiDung;
      sauKhiNap();
    })
    .catch(function () {
      vungHienThi.innerHTML = noiDungDuPhong;
      sauKhiNap();
    });
}

// Đánh dấu liên kết menu trùng với trang đang mở.
function capNhatMenuHienTai(header) {
  const duongDanHienTai = window.location.pathname;
  const cacLienKet = header.querySelectorAll('.thanh-dieu-huong a');

  cacLienKet.forEach(function (lienKet) {
    const duongDanLienKet = new URL(lienKet.getAttribute('href'), document.baseURI).pathname;
    lienKet.classList.toggle('trang-hien-tai', duongDanLienKet === duongDanHienTai);
  });
}


// Hiển thị tên, mã số và email theo tên tệp hiện tại.
function hienThiLienHeThanhVien(footer) {
  const vungLienHe = footer.querySelector('#thong-tin-thanh-vien');
  if (!vungLienHe) return;

  const tenTrang = window.location.pathname.split('/').pop() || 'index.html';
  const thongTin = LIEN_HE_THANH_VIEN[tenTrang];
  if (!thongTin) return;

  const [hoTen, maSo, email] = thongTin;
  const dongTen = document.createElement('p');
  dongTen.textContent = hoTen + ' · ' + maSo;

  const dongEmail = document.createElement('p');
  const lienKetEmail = document.createElement('a');
  lienKetEmail.href = 'mailto:' + email;
  lienKetEmail.textContent = email;
  dongEmail.appendChild(lienKetEmail);

  vungLienHe.replaceChildren(dongTen, dongEmail);
}

# Happy Star Hotel Nha Trang — landing page

Trang giới thiệu khách sạn, 4 ngôn ngữ: Tiếng Việt (`/`), English (`/en/`), 한국어 (`/ko/`), Русский (`/ru/`).
Làm bằng [Astro](https://astro.build), xuất HTML tĩnh, host trên Netlify.

## Chạy trên máy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # xuất ra thư mục dist/
```

Cần Node 22 (xem `.nvmrc`).

## Sửa nội dung thường gặp

| Muốn sửa | File |
|---|---|
| Số điện thoại, email, Facebook, link Google Maps, giờ nhận/trả phòng, điểm Agoda | `src/data/contact.ts` |
| Giá phòng, diện tích, giường, sức chứa, số phòng, ảnh của từng hạng | `src/data/rooms.ts` |
| Ảnh trong phần "Hình ảnh khách sạn" | `galleryImages` cuối file `src/data/rooms.ts` |
| Chữ trên trang (từng ngôn ngữ) | `src/i18n/vi.ts`, `en.ts`, `ko.ts`, `ru.ts` |
| Màu, cỡ chữ chung | `src/styles/global.css` |

Giá "Từ …/đêm" lấy từ `priceWeekday`, dòng giá cuối tuần lấy từ `priceWeekend`.

### Thêm / đổi ảnh

1. Bỏ ảnh vào `src/assets/rooms/<tên-hạng>/` (ảnh gốc càng to càng tốt, Astro tự nén và tạo nhiều cỡ).
2. Thêm đường dẫn vào mảng `images` của hạng phòng trong `src/data/rooms.ts`. Ảnh đầu tiên là ảnh chính.

## Deploy lên Netlify

1. Đẩy code lên GitHub.
2. Netlify → **Add new site → Import an existing project** → chọn repo. Cấu hình build đã có sẵn trong `netlify.toml` (`npm run build`, thư mục `dist`).
3. **Domain management → Add domain** `happystarhotelnhatrang.com`, rồi trỏ DNS theo hướng dẫn của Netlify (hoặc chuyển nameserver về Netlify). HTTPS được cấp tự động. `www.` tự chuyển về tên miền chính.

Mỗi lần push lên nhánh `main`, Netlify tự build lại trang.

## Đo lượt bấm nút liên hệ

Mọi nút liên hệ có thuộc tính `data-cta` (vd. `hero-zalo`, `room-whatsapp`, `contact-call`). Khi có mã GA4 (sẽ bổ sung sau) và gắn Google Analytics 4 (`gtag`) hoặc Plausible vào `src/layouts/Layout.astro`, trang sẽ tự gửi sự kiện `contact_click` kèm tên nút, hạng phòng và ngôn ngữ.

## Ghi chú

- Bản dịch tiếng Hàn và tiếng Nga do máy soạn — nên nhờ người bản ngữ đọc lại trước khi quảng bá.
- Đầu trang dùng banner chính thức `src/assets/hotel/banner.webp` (2000×667, chữ tiếng Việt, dùng chung cho cả 4 ngôn ngữ). Muốn đổi banner thì thay file này, giữ tỉ lệ 3:1.

## Nhánh làm việc

Sửa trên nhánh `dev`, xem ổn rồi mới merge vào `main` — Netlify chỉ deploy khi `main` thay đổi.

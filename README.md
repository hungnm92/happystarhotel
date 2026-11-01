# Happy Star Hotel Nha Trang — landing page

Trang giới thiệu khách sạn, 4 ngôn ngữ: Tiếng Việt (`/`), English (`/en/`), 한국어 (`/ko/`), Русский (`/ru/`).
Làm bằng [Astro](https://astro.build), xuất HTML tĩnh, host trên VPS Oracle Cloud (Ubuntu + Caddy).

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
| Giá "từ" ở đầu trang (`minPrice`), diện tích, giường, sức chứa, số phòng, ảnh của từng hạng | `src/data/rooms.ts` |
| Ảnh trong phần "Hình ảnh khách sạn" | `galleryImages` cuối file `src/data/rooms.ts` |
| Chữ trên trang (từng ngôn ngữ) | `src/i18n/vi.ts`, `en.ts`, `ko.ts`, `ru.ts` |
| Màu, cỡ chữ chung | `src/styles/global.css` |

Trang chỉ ghi một mức "Giá từ …/đêm" ở đầu trang, lấy từ `minPrice` trong `src/data/rooms.ts`. Thẻ phòng không ghi giá, khách bấm "Đặt phòng qua Zalo / WhatsApp" để nhắn.

### Thêm / đổi ảnh

1. Bỏ ảnh vào `src/assets/rooms/<tên-hạng>/` (ảnh gốc càng to càng tốt, Astro tự nén và tạo nhiều cỡ).
2. Thêm đường dẫn vào mảng `images` của hạng phòng trong `src/data/rooms.ts`. Ảnh đầu tiên là ảnh chính.

## Đưa trang lên

```bash
npm run deploy
```

Build rồi đẩy `dist/` lên VPS Oracle (`161.118.227.225`) qua lối tắt SSH `crm-web`. Push lên GitHub **không** tự deploy. Cài đặt máy chủ, Caddy, HTTPS và DNS: xem [deploy/README.md](deploy/README.md).

## Đo lượt bấm nút liên hệ

Google Analytics 4 (`G-0BB9JHVXGG`) được gắn trong `src/layouts/Layout.astro`, chỉ khi build (`npm run dev` trên máy không gửi số liệu).

Mọi nút liên hệ có thuộc tính `data-cta` (vd. `hero-zalo`, `room-whatsapp`, `contact-call`). Mỗi lần bấm, trang gửi sự kiện `contact_click` kèm `cta` (tên nút), `room` (hạng phòng) và `lang` (ngôn ngữ). Trong GA4 nên đánh dấu `contact_click` là **sự kiện chính** (Key event) để đếm lượt khách liên hệ.

## Ghi chú

- Bản dịch tiếng Hàn và tiếng Nga do máy soạn — nên nhờ người bản ngữ đọc lại trước khi quảng bá.
- Đầu trang dùng banner chính thức `src/assets/hotel/banner.webp` (2000×667, chữ tiếng Việt, dùng chung cho cả 4 ngôn ngữ). Muốn đổi banner thì thay file này, giữ tỉ lệ 3:1.

## Nhánh làm việc

Sửa trên nhánh `dev`, xem ổn rồi merge vào `main` và chạy `npm run deploy` từ `main`.

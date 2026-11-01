# Kế hoạch Landing Page – Happy Star Hotel (Nha Trang)

> **Trạng thái:** đã dựng xong bản đầu (VI / EN / KO / RU) — xem `README.md` để chạy, sửa giá và deploy.
>
> Mục tiêu: 1 trang landing quảng bá hình ảnh khách sạn, dẫn khách liên hệ đặt phòng qua Zalo / WhatsApp / Facebook / Gọi / Email. Không blog, không tin tức, không đặt phòng online. Host trên VPS Oracle Cloud (từ 01/11/2026, trước đó Netlify).

---

## 1. Dữ liệu khách sạn

Nguồn: `Happy_Star_Hotel_view.pdf`, brochure, banner Facebook, bảng giá tạm tính, các folder ảnh phòng, trang Agoda.

| Mục | Nội dung |
|---|---|
| Tên | Happy Star Hotel Nha Trang ★★★ — "Cozy Hotel in the Heart of Nha Trang" |
| Slogan | "Một chốn nghỉ ngơi trọn nhịp phố biển." · "Trải nghiệm kỳ nghỉ thoải mái tại Nha Trang" · "Kỳ nghỉ thoải mái – Giá bình dân" · "Không chỉ là nơi nghỉ, mà còn là cảm giác như ở nhà" |
| Địa chỉ | 132/40 Hùng Vương, Lộc Thọ, Nha Trang, Khánh Hòa (trong hẻm, yên tĩnh) |
| Hotline | **0935 372 719** — dùng cho Gọi / Zalo / WhatsApp *(đã chốt; không dùng 0706 666 635 trên banner)* |
| Tên miền | **happystarhotelnhatrang.com** |
| Email | happystarhotelnhatrang@gmail.com |
| Facebook | https://www.facebook.com/happystarhotelnhatrang/ |
| Google Maps | https://maps.app.goo.gl/5aseMEwJnvL1VMHV7 |
| Quy mô | 30 phòng, tầng 2–7, có thang máy |
| Nhận / trả phòng | 14:00 / 12:00 · lễ tân 24h *(theo Agoda)* |
| USP | Vị trí đẹp gần biển · Dịch vụ chu đáo · Phòng ốc tiện nghi · Sạch sẽ – tiện nghi – thân thiện · Phù hợp khách đoàn · Giá bình dân |
| Tiện nghi phòng | Wi-Fi miễn phí · Điều hòa · TV · Tủ lạnh · Bàn trang điểm · Khăn tắm · Đồ dùng cá nhân · Phòng tắm riêng nước nóng |
| Dịch vụ *(chủ KS đã xác nhận)* | Bữa sáng · Giặt ủi · Sân thượng · Bếp chung · Chỗ đậu xe máy · Thang máy · Lễ tân 24h |
| Chính sách trẻ em | Trẻ dưới 6 tuổi miễn phí |
| Đánh giá | Agoda 8.0/10 (108 đánh giá) — Dịch vụ 8.5 · Sạch sẽ 8.4 · Đáng giá tiền 8.4 · Vị trí 8.3 |
| Màu thương hiệu (theo logo) | Xanh dương `#0D4DA1` · cam `#F7931E` · xanh lá dừa `#2E9B3E` · navy chân trang `#0B2E6B` · nền kem `#FFF8EE` |

### Hạng phòng — đối chiếu bảng giá + folder ảnh + Agoda

**Agoda có đúng 7 hạng**, trùng với brochure: Standard Double, Superior Double, Superior Twin, Superior Triple, Deluxe Twin with Balcony, Deluxe Triple with Balcony, Family Room. Agoda không chia thêm hạng nào khác.

| Hạng phòng | Số phòng | Giường | Sức chứa | m² | Đặc điểm | Giá thường CN–T5 | Cuối tuần T6–T7 | Folder ảnh |
|---|---|---|---|---|---|---|---|---|
| Standard Double | 204·304·404·504·604·704 (6) | 1 × 1,6m | 2 NL | 16 | Cửa sổ nhỏ | 380.000 | 450.000 | Stand Double (5 ảnh) |
| Superior Double | 205·305·405·505·605·705 (6) | 1 × 1,8m | 2 NL + 1 TE | 23 | Cửa sổ lớn | 480.000 | 580.000 | Sup Double (5 ảnh) |
| Superior Twin | 506·606·706 (3) | 2 × 1,2m | 2 NL | 25 | Cửa sổ lớn, ban công nhỏ | 550.000 | 650.000 | Sup Twins (8 ảnh, dùng chung) |
| Superior Triple | 206·306·406 (3) | 1,6m + 1,2m | 3 NL + 1 TE | 25 | Cửa sổ lớn, ban công nhỏ | 680.000 | 850.000 | Sup Twins (dùng chung) |
| Deluxe Twin (Balcony) | 302·402·502·602·702 (5) | 2 × 1,2m | 2 NL | 30 | Ban công lớn, bồn tắm lớn | 600.000 | 750.000 | Deluxe Twins (9 ảnh) |
| Deluxe Triple (Balcony) | 201·301·401 (3) | 1,6m + 1,2m | 3 NL + 1 TE | 32 | Ban công lớn | 750.000 | 900.000 | Deluxe Fam (dùng chung) |
| Deluxe Family (Balcony) | 501·601·701 (3) | 2 × 1,6m | 4 NL + 2 TE | 32 | Ban công lớn | 850.000 | 1.100.000 | Deluxe Fam (9 ảnh) |
| *Phòng 202 (ngoại lệ)* | 202 (1) | 1,8m + 1,2m | 3 NL + 1 TE | ? | Ban công lớn | 800.000 | 950.000 | Folder ghi thuộc Deluxe Twins |

Tổng: 30 phòng. Trên web hiển thị **7 thẻ phòng**, thẻ **không ghi giá** (chủ KS chốt 30/10/2026: chỉ ghi "Giá từ 380.000đ/đêm" ở đầu trang, giá từng hạng khách nhắn hỏi). Bảng giá trên chỉ để tham khảo nội bộ. Phòng 202 có ban công lớn → gộp vào nhóm Deluxe (thẻ Deluxe Triple), không làm thẻ riêng.

**Điểm vênh giữa các nguồn (cần chủ KS chốt):**
- **Sức chứa:** brochure ghi Superior Twin / Deluxe Twin "2 NL + 2 TE", Deluxe Triple / Superior Triple "3 NL + 2 TE"; bảng giá ghi 2 NL / 3 NL + 1 TE.
- **Superior Triple:** brochure ghi "cửa sổ lớn, bồn tắm nhỏ", bảng giá ghi "ban công nhỏ".
- **Phòng 202:** folder xếp vào Deluxe Twins, nhưng bảng giá là giường 1,8m + 1,2m, 3 NL + 1 TE.
- **Phòng 705:** có trong bảng giá Superior Double, thiếu trong tên folder.
- **Sân bay Cam Ranh:** brochure 35 km, Agoda 25 km (Agoda tính đường chim bay) → dùng **35 km / ~40 phút**.

### Hình ảnh — hiện trạng

| Nguồn | Dùng được cho web? | Ghi chú |
|---|---|---|
| 5 folder ảnh phòng (36 ảnh) | ✅ Có — ảnh sạch, không chữ | 1280px (đa số) đến 2568px (Sup Double, Stand Double). Đủ cho thẻ phòng + lightbox |
| `Document/logo.webp` (1254×1254) | ✅ Dùng chính thức | Đủ nét cho header, footer, favicon |
| 2 ảnh sảnh + hành lang | ✅ Có | Dùng cho phần giới thiệu / thư viện |
| Ảnh trong `Happy_Star_Hotel_view.pdf` | ✅ Trích xuất | Mặt tiền về đêm (1024×1536), nền biển (1600×900) — dùng cho hero |
| Banner Facebook, 9 poster brochure | ❌ Không | Đã in chữ. Banner dùng làm tham khảo phong cách / ảnh OG chia sẻ |
| `bang-gia-tam-tinh.webp` | Chỉ là dữ liệu | Đã chép giá vào bảng trên |

**Còn thiếu:** ảnh mặt tiền ban ngày độ phân giải cao, ảnh ban công + view từ ban công, sân thượng, thang máy, ảnh biển Trần Phú không chữ (cho hero).

---

## 2. Cấu trúc trang (1 trang, cuộn dọc, menu neo `#`)

| # | Section | Nội dung | CTA |
|---|---|---|---|
| 0 | **Header (sticky)** | Logo · menu: Phòng / Tiện nghi / Vị trí / Liên hệ · chuyển ngữ VI/EN | Nút "Đặt phòng" (cam) |
| 1 | **Hero** | Ảnh mặt tiền KS + biển, slogan "Trải nghiệm kỳ nghỉ thoải mái tại Nha Trang", dòng phụ "Cách biển Trần Phú 300 m · Giá chỉ từ 380.000đ" | Chat Zalo · Gọi ngay |
| 2 | **Giới thiệu** | "Khách sạn ấm áp giữa lòng Nha Trang" + icon USP + số liệu (7 hạng phòng · 30 phòng · 300 m tới biển · 8.0/10 Agoda) | — |
| 3 | **Hạng phòng** | 7 thẻ: ảnh chính + ảnh phụ, tên VI/EN, m², giường, sức chứa, đặc điểm, không ghi giá. Bộ lọc nhanh: Cặp đôi / Gia đình / Nhóm. Bấm ảnh → lightbox | "Hỏi phòng này" → Zalo / WhatsApp (điền sẵn tên phòng) |
| 4 | **Tiện nghi & dịch vụ** | Icon tiện nghi phòng + dịch vụ (bữa sáng, giặt ủi, sân thượng, bếp chung, chỗ đậu xe máy, thang máy, lễ tân 24h) + giờ nhận/trả phòng + "Trẻ dưới 6 tuổi miễn phí" | — |
| 5 | **Khách nói gì** | Điểm Agoda 8.0 + điểm từng tiêu chí, link "Xem đánh giá trên Agoda". Không chép nguyên văn đánh giá của Agoda (bản quyền) — nếu muốn trích, xin khách cho phép hoặc lấy từ Google / Facebook của chính KS | Link Agoda / Google |
| 6 | **Thư viện ảnh** | Masonry: mặt tiền, sảnh, hành lang, phòng tắm, ban công, view | — |
| 7 | **Vị trí** | Bản đồ Google nhúng + 9 điểm & khoảng cách (Biển Trần Phú 300 m, Chợ đêm 600 m, Tháp Trầm Hương 600 m, Nhà thờ Đá 2 km, Ga 2,2 km, Chợ Đầm 2,3 km, Viện Hải dương học 3,8 km, Cáp treo Vinpearl 4,2 km, Sân bay Cam Ranh 35 km). Ghi chú "trong hẻm – yên tĩnh" + ảnh/hướng dẫn lối vào hẻm (đánh giá Agoda có khách nói khó tìm đường) | "Chỉ đường" → Google Maps |
| 8 | **Liên hệ đặt phòng** | Dải nền navy: Zalo · WhatsApp · Messenger · Gọi · Email; địa chỉ; ghi chú "Đặt từ 5 phòng trở lên – liên hệ để có giá đoàn" | Tất cả kênh |
| 9 | **Footer** | Logo, địa chỉ, SĐT, email, icon Facebook, © | — |
| + | **Thanh liên hệ nổi** | Mobile: thanh dính đáy 3 nút (Gọi · Zalo · WhatsApp). Desktop: bong bóng nổi góc phải | — |

### Link CTA

| Kênh | Link |
|---|---|
| Gọi | `tel:+84935372719` |
| Zalo | `https://zalo.me/0935372719` |
| WhatsApp | `https://wa.me/84935372719?text=<nội dung điền sẵn, URL-encode>` |
| Facebook | `https://www.facebook.com/happystarhotelnhatrang/` |
| Messenger | `https://m.me/happystarhotelnhatrang` |
| Email | `mailto:happystarhotelnhatrang@gmail.com?subject=Yêu cầu đặt phòng` |
| Chỉ đường | `https://maps.app.goo.gl/5aseMEwJnvL1VMHV7` |
| Bản đồ nhúng | iframe "Embed a map" lấy từ Google Maps (link rút gọn không nhúng trực tiếp được) |

Tất cả link ngoài mở tab mới, `rel="noopener"`. Mọi số điện thoại / URL nằm trong **một file** `src/data/contact.ts`; thông số phòng và giá "từ" (`minPrice`) trong `src/data/rooms.ts`.

---

## 3. Công nghệ đề xuất

| Hạng mục | Lựa chọn | Lý do |
|---|---|---|
| Framework | **Astro** (static output) | Xuất HTML tĩnh, gần như 0 JS, tối ưu ảnh tự động (`astro:assets` → WebP/AVIF, `srcset`), đa ngôn ngữ `/` và `/en/` |
| CSS | CSS thuần với biến màu (`src/styles/global.css`) + CSS riêng từng component | Ít phụ thuộc, dễ sửa |
| Lightbox | Tự viết bằng `<dialog>` (~1 KB, có vuốt trên điện thoại) | Xem ảnh phòng |
| Font | Nunito (có tiếng Việt + Cyrillic cho tiếng Nga); tiếng Hàn dùng font hệ thống | Self-host |
| Icon | SVG inline (Lucide) + icon Zalo / WhatsApp / Messenger | |
| Hosting | Netlify (deploy từ GitHub, preview mỗi PR) | Miễn phí, HTTPS, CDN |

### Cấu trúc thư mục dự kiến
```
HappyStar/
├─ Document/ + các folder ảnh gốc   # tài liệu gốc (không deploy)
├─ src/
│  ├─ assets/
│  │  ├─ brand/logo.png
│  │  └─ rooms/<slug>/*.jpg        # đổi tên ảnh: standard-double-01.jpg …
│  ├─ components/                  # Header, Hero, RoomCard, Amenities, Reviews, MapSection, ContactBar…
│  ├─ data/contact.ts              # SĐT, email, link CTA
│  ├─ data/rooms.ts                # 7 hạng phòng (thông số, ảnh, minPrice)
│  ├─ i18n/{vi,en}.json
│  └─ pages/index.astro, en/index.astro
├─ public/  favicon, og-image.jpg, robots.txt
├─ astro.config.mjs
└─ netlify.toml
```

---

## 4. SEO, hiệu năng, đo lường

- **SEO:** `<title>`/meta description VI & EN (từ khóa: "khách sạn gần biển Nha Trang giá rẻ", "Happy Star Hotel Nha Trang"), `hreflang`, Open Graph 1200×630 (cắt từ banner Facebook — hiển thị đẹp khi gửi link qua Zalo/Facebook), `sitemap.xml`, `robots.txt`.
- **Schema.org `Hotel` JSON-LD:** tên, địa chỉ, điện thoại, email, toạ độ, `starRating: 3`, `numberOfRooms: 30`, `priceRange: "380.000₫ – 1.100.000₫"`, `checkinTime 14:00`, `checkoutTime 12:00`, `amenityFeature`, `sameAs` (Facebook, Agoda).
- **Hiệu năng:** Lighthouse ≥ 90 mobile; ảnh hero `fetchpriority="high"`, còn lại `loading="lazy"`; bản đồ chỉ tải iframe khi cuộn tới.
- **Đo lường:** GA4 hoặc Plausible; gắn sự kiện click từng nút CTA (zalo / whatsapp / call / email / messenger / maps) và theo từng hạng phòng.
- **Truy cập:** alt text cho mọi ảnh, tương phản AA, nút ≥ 44px trên mobile.
- **Đồng bộ:** sửa lại Agoda ("Number of rooms: 1" đang sai, mô tả hạng phòng) và Google Business Profile cho khớp thông tin web.

## 5. Netlify

- `netlify.toml`: `command = "npm run build"`, `publish = "dist"`, Node 20.
- Cache dài cho `/_astro/*`; header bảo mật cơ bản; CSP cho phép iframe Google Maps.
- Tên miền `happystarhotelnhatrang.com` → DNS về Netlify, HTTPS tự động; `www.happystarhotelnhatrang.com` redirect 301 về bản không `www`. Đặt `site: "https://happystarhotelnhatrang.com"` trong `astro.config.mjs` (cho canonical, sitemap, OG).
- Push `main` → production; nhánh/PR → deploy preview cho chủ KS duyệt.

---

## 6. Lộ trình triển khai

| Giai đoạn | Việc | Ước lượng |
|---|---|---|
| 1. Chuẩn bị | Chốt câu hỏi mục 7; sắp xếp + đổi tên ảnh theo hạng phòng; trích ảnh mặt tiền từ PDF | 1 ngày |
| 2. Thiết kế | Bảng màu/font theo logo + banner; bản mock desktop + mobile để duyệt | 1–2 ngày |
| 3. Dựng trang | Astro + Tailwind, các section, dữ liệu phòng & giá, CTA, lightbox, bản đồ | 2–3 ngày |
| 4. Đa ngôn ngữ & SEO | Bản EN, meta/OG, JSON-LD, sitemap, analytics | 1 ngày |
| 5. Kiểm thử | Lighthouse; iPhone/Android; test từng link CTA (Zalo mở app, WhatsApp điền sẵn…); trình duyệt trong app Zalo/Facebook | 0,5–1 ngày |
| 6. Go-live | Netlify + tên miền + HTTPS; gắn link vào Facebook, Google Business, Zalo OA | 0,5 ngày |

---

## 7. Đã chốt với chủ khách sạn

- Hotline duy nhất **0935 372 719** (Gọi / Zalo / WhatsApp).
- Hiển thị **"Giá từ …đ/đêm"** theo giá ngày thường, từ 380.000đ; kèm ghi chú "giá tham khảo, cuối tuần/lễ Tết thay đổi — liên hệ để có giá tốt nhất".
- Trẻ **dưới 6 tuổi miễn phí**.
- Phòng 202 có **ban công lớn** (xếp nhóm Deluxe).
- Dịch vụ: **bữa sáng, giặt ủi, sân thượng, bếp chung, chỗ đậu xe máy** (bỏ đưa đón sân bay, thú cưng, đỗ ô tô khỏi web).
- Tên miền: **happystarhotelnhatrang.com**.

## 8. Còn mở (không chặn việc dựng trang)

1. **Sức chứa trẻ em** từng hạng (brochure ghi "+ 2 TE", bảng giá ghi ít hơn) → tạm dùng số trong bảng giá.
2. **Ảnh bổ sung:** mặt tiền ban ngày, ban công + view, sân thượng, bữa sáng → tạm dùng ảnh trích từ PDF. Logo dùng luôn `logo.webp` (đã chốt, không cần vector).
5. ~~**GA4:**~~ ✅ Đã gắn `G-0BB9JHVXGG` (31/10/2026).
3. **Ngôn ngữ:** đã làm VI / EN / KO / RU — bản Hàn và Nga cần người bản ngữ đọc lại.
4. Tên miền đã mua chưa và đang quản lý DNS ở đâu (để trỏ về Netlify lúc go-live).

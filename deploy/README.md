# Host trên VPS Oracle Cloud (Ubuntu + Caddy)

Máy chủ: `161.118.227.225`, user `ubuntu`. Trang tĩnh nằm ở `/var/www/happystar`, Caddy phục vụ và tự lo HTTPS.

## 1. SSH vào máy (một lần trên mỗi máy tính)

Các lệnh dùng lối tắt SSH `crm-web`. Thêm vào `~/.ssh/config` (khoá riêng Oracle cho tải về khi tạo máy, quyền `600`):

```
Host crm-web
    HostName 161.118.227.225
    User ubuntu
    IdentityFile ~/.ssh/crm_web.key
    IdentitiesOnly yes
```

Thử bằng `ssh crm-web`. Dùng tên khác thì chạy lệnh với `DEPLOY_HOST=<tên> npm run deploy`.

## 2. Mở cổng 80/443 trên Oracle Cloud (một lần, làm trên web)

Oracle chặn ở hai lớp. Lớp trong máy (iptables) do `setup-server.sh` mở. Lớp ngoài phải làm trên console:

**Networking → Virtual cloud networks → (VCN của máy) → Subnet → Security List → Add Ingress Rules**, thêm 2 dòng:

| Source CIDR | IP Protocol | Destination Port |
|---|---|---|
| `0.0.0.0/0` | TCP | `80` |
| `0.0.0.0/0` | TCP | `443` |

## 3. Cài máy chủ (một lần)

```bash
ssh crm-web 'bash -s' < deploy/setup-server.sh
npm run deploy:caddy
```

## 4. Đưa trang lên

```bash
npm run deploy
```

Build rồi `rsync` thư mục `dist/` lên máy chủ. Push lên GitHub **không** tự deploy — chạy lệnh này khi muốn trang thay đổi.

## 5. Trỏ DNS (Mắt Bão)

| Host | Loại | Giá trị |
|---|---|---|
| `@` | A | `161.118.227.225` |
| `www` | A | `161.118.227.225` (thay cho CNAME Netlify) |

Giữ nguyên bản ghi TXT `google-site-verification`. Sau khi DNS đổi, Caddy tự xin chứng chỉ HTTPS trong vài phút (`ssh crm-web 'sudo journalctl -u caddy -n 50'` để xem). Nếu đổi DNS mà chưa có HTTPS, chạy `ssh crm-web 'sudo systemctl reload caddy'` để Caddy xin lại ngay.

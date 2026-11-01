#!/usr/bin/env bash
# Cài đặt lần đầu trên VPS Ubuntu (Oracle Cloud). Chạy một lần:
#   ssh crm-web 'bash -s' < deploy/setup-server.sh
set -euo pipefail

# Caddy từ kho chính thức
sudo apt-get update -y
sudo apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl rsync
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list >/dev/null
sudo apt-get update -y
sudo apt-get install -y caddy

# Ảnh Ubuntu của Oracle chặn mọi cổng trừ 22 bằng iptables — mở 80 và 443
for port in 80 443; do
  if ! sudo iptables -S INPUT | grep -q -- "--dport $port -j ACCEPT"; then
    sudo iptables -I INPUT 6 -p tcp --dport "$port" -m state --state NEW -j ACCEPT
  fi
done
sudo netfilter-persistent save

# Thư mục chứa trang, user ubuntu được ghi để rsync
sudo mkdir -p /var/www/happystar
sudo chown -R ubuntu:ubuntu /var/www/happystar

# Tự cập nhật bản vá bảo mật
sudo apt-get install -y unattended-upgrades
sudo dpkg-reconfigure -f noninteractive unattended-upgrades

echo "Xong. Chép Caddyfile bằng: npm run deploy:caddy"

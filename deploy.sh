#!/bin/bash
# SK-Petrotek EC2 Deployment Script
# Run this on the EC2 instance after SSH-ing in

set -e

echo "=== SK-Petrotek Deployment ==="

# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# 3. Install PM2 globally
sudo npm install -g pm2

# 4. Clone the repo (replace with your repo URL if needed)
REPO="https://github.com/Tuteveta/sk-petrotek.git"
APP_DIR="/home/ubuntu/sk-petrotek"

if [ -d "$APP_DIR" ]; then
  echo "Updating existing clone..."
  cd "$APP_DIR"
  git pull origin main
else
  echo "Cloning repo..."
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

# 5. Install dependencies and build
npm ci
npm run build

# 6. Start app with PM2
pm2 delete sk-petrotek 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu | tail -1 | sudo bash

echo ""
echo "=== App is running on port 3000 ==="
echo "Next: configure nginx (see nginx config in this repo)"

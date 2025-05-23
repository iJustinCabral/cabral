#!/bin/bash

# Initial Server Setup Script for DigitalOcean Droplet
# Run this ONCE when you first set up your droplet

set -e

echo "🔧 Setting up DigitalOcean droplet for blog deployment..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Update system
echo -e "${YELLOW}📦 Updating system packages...${NC}"
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
echo -e "${YELLOW}📦 Installing Node.js 18...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install additional tools
echo -e "${YELLOW}📦 Installing additional tools...${NC}"
sudo apt install -y nginx git ufw

# Install PM2 globally
echo -e "${YELLOW}📦 Installing PM2...${NC}"
sudo npm install -g pm2

# Setup PM2 to start on boot
sudo pm2 startup
pm2 save

# Create application directory
echo -e "${YELLOW}📁 Setting up application directory...${NC}"
sudo mkdir -p /var/www/cabral
sudo chown $USER:$USER /var/www/cabral

# Configure firewall
echo -e "${YELLOW}🔥 Configuring firewall...${NC}"
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Start and enable services
echo -e "${YELLOW}⚙️  Starting services...${NC}"
sudo systemctl start nginx
sudo systemctl enable nginx

echo -e "${GREEN}✅ Server setup complete!${NC}"
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Clone your repository to /var/www/cabral"
echo "2. Update nginx.conf with your domain name"
echo "3. Run ./deploy.sh"
echo ""
echo -e "${YELLOW}📊 Useful commands:${NC}"
echo "  systemctl status nginx"
echo "  pm2 status"
echo "  ufw status"
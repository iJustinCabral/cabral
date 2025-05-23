#!/bin/bash

# Blog Deployment Script for DigitalOcean Droplet
# Run this script after git pull on your droplet

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Configuration
APP_DIR="/var/www/cabral"
LOG_DIR="/var/log/pm2"
NGINX_SITES="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create log directory if it doesn't exist
sudo mkdir -p $LOG_DIR
sudo chown $USER:$USER $LOG_DIR

echo -e "${YELLOW}📦 Installing/updating dependencies...${NC}"

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..

echo -e "${YELLOW}🏗️  Building React app...${NC}"

# Build React app for production
npm run build

echo -e "${YELLOW}⚙️  Setting up PM2 process...${NC}"

# Stop existing PM2 process if running
pm2 stop blog-server 2>/dev/null || true
pm2 delete blog-server 2>/dev/null || true

# Start new PM2 process
pm2 start ecosystem.config.js
pm2 save

echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"

# Copy nginx config (update your-domain.com first!)
sudo cp nginx.conf $NGINX_SITES/cabral

# Enable site if not already enabled
if [ ! -L "$NGINX_ENABLED/cabral" ]; then
    sudo ln -s $NGINX_SITES/cabral $NGINX_ENABLED/cabral
fi

# Remove default nginx site if it exists
sudo rm -f $NGINX_ENABLED/default

# Test nginx configuration
sudo nginx -t

if [ $? -eq 0 ]; then
    echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
    sudo systemctl reload nginx
else
    echo -e "${RED}❌ Nginx configuration test failed!${NC}"
    exit 1
fi

echo -e "${YELLOW}📁 Setting up blog content directory...${NC}"

# Create blog content directory if it doesn't exist
mkdir -p blog-content

# Set proper permissions
sudo chown -R $USER:$USER $APP_DIR
sudo chmod -R 755 $APP_DIR

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌍 Your blog should be available at your domain${NC}"
echo -e "${YELLOW}📊 Useful commands:${NC}"
echo "  pm2 status           - Check PM2 processes"
echo "  pm2 logs blog-server - View server logs"
echo "  pm2 restart blog-server - Restart server"
echo "  sudo nginx -t        - Test nginx config"
echo "  sudo systemctl status nginx - Check nginx status"
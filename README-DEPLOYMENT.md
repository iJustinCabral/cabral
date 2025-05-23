# Blog Deployment Guide

This guide will help you deploy your React blog with Express backend to a DigitalOcean droplet.

## Prerequisites

- DigitalOcean droplet (Ubuntu 22.04 recommended)
- Domain name pointed to your droplet's IP
- SSH access to your droplet

## Quick Deployment Steps

### 1. Initial Server Setup (One-time only)

SSH into your new droplet and run:

```bash
# Download the setup script
curl -o server-setup.sh https://raw.githubusercontent.com/yourusername/yourrepo/main/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh
```

Or manually:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git ufw

# Install PM2
sudo npm install -g pm2
sudo pm2 startup
pm2 save

# Setup firewall
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Create app directory
sudo mkdir -p /var/www/cabral
sudo chown $USER:$USER /var/www/cabral
```

### 2. Deploy Your Blog

```bash
# Clone your repository
cd /var/www
git clone https://github.com/yourusername/yourrepo.git cabral
cd cabral

# Update nginx.conf with your domain name
nano nginx.conf
# Change "your-domain.com" to your actual domain

# Run deployment
./deploy.sh
```

### 3. SSL Setup (Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

## File Structure on Server

```
/var/www/cabral/
├── build/                 # React production build
├── server/               # Express backend
├── blog-content/         # Your blog posts (markdown files)
├── nginx.conf           # Nginx configuration
├── ecosystem.config.js  # PM2 configuration
└── deploy.sh           # Deployment script
```

## Environment Configuration

### Production API URL

Update your React app to use the production API URL:

In your React components, change:
```javascript
// Development
const response = await fetch('http://localhost:3001/api/posts')

// Production
const response = await fetch('/api/posts')
```

### Nginx Configuration

Key points in `nginx.conf`:
- Serves React build from `/var/www/cabral/build`
- Proxies `/api/*` requests to Express server on port 3001
- Handles React Router with `try_files`

### PM2 Configuration

The `ecosystem.config.js` file:
- Runs Express server in production mode
- Manages process restarts
- Logs to `/var/log/pm2/`

## Useful Commands

### PM2 Process Management
```bash
pm2 status                # Check all processes
pm2 logs blog-server     # View server logs
pm2 restart blog-server  # Restart server
pm2 stop blog-server     # Stop server
pm2 delete blog-server   # Remove process
```

### Nginx Management
```bash
sudo nginx -t                    # Test configuration
sudo systemctl reload nginx     # Reload config
sudo systemctl restart nginx    # Restart nginx
sudo systemctl status nginx     # Check status
```

### Deployment Updates
```bash
# When you update your code
git pull origin main
./deploy.sh
```

### Log Files
```bash
# PM2 logs
tail -f /var/log/pm2/blog-server.log

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## Troubleshooting

### Server Won't Start
1. Check PM2 status: `pm2 status`
2. Check logs: `pm2 logs blog-server`
3. Verify Node.js installation: `node --version`

### Nginx Issues
1. Test config: `sudo nginx -t`
2. Check syntax errors in nginx.conf
3. Verify file permissions: `ls -la /var/www/cabral`

### API Calls Failing
1. Check if Express server is running: `pm2 status`
2. Test API directly: `curl localhost:3001/api/posts`
3. Check nginx proxy configuration

### Permission Issues
```bash
# Fix ownership
sudo chown -R $USER:$USER /var/www/cabral

# Fix permissions
sudo chmod -R 755 /var/www/cabral
```

## Security Notes

- The admin password is hardcoded (`blog2025`). Consider using environment variables in production.
- SSL certificate is highly recommended for production.
- Regular security updates: `sudo apt update && sudo apt upgrade`
- Consider setting up automated backups for your blog content.

## Backup Strategy

```bash
# Backup blog content
tar -czf blog-backup-$(date +%Y%m%d).tar.gz blog-content/

# Backup to remote location (optional)
rsync -av blog-content/ user@backup-server:/backups/blog/
```
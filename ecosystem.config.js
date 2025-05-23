module.exports = {
  apps: [
    {
      name: 'blog-server',
      script: './server/index.js',
      cwd: '/var/www/cabral',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: '/var/log/pm2/blog-server-error.log',
      out_file: '/var/log/pm2/blog-server-out.log',
      log_file: '/var/log/pm2/blog-server.log',
      time: true,
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'blog-content']
    }
  ]
}
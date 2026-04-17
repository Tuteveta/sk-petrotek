module.exports = {
  apps: [
    {
      name: 'sk-petrotek',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/ubuntu/sk-petrotek',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};

module.exports = {
  apps: [
    {
      name: "decoropic",
      script: "./server.js",
      cwd: "/var/www/decoropic",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1"
      }
    }
  ]
};

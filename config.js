require('dotenv').config();

module.exports = {
  admin: {
    username: process.env.ADMIN_USERNAME || 'yaohuiadmin',
    password: process.env.ADMIN_PASSWORD || '553423889@qq.cn'
  },
  server: {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'RhDrJZappF9o4x4GPB7S+R7Hge8UVY/Ko+IPYNtuHVw='
  }

}; 

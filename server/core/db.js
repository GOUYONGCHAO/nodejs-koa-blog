const Sequelize = require('sequelize')

const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database
// 建立连接
const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: true,
    timezone: '+08:00',
    define: {
        // create_time && update_time
        timestamps: true,
        // delete_time
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        // 把驼峰命名转换为下划线
        underscored: true,
        scopes: {
            bh: {
                attributes: {
                    exclude: ['password', 'updated_at', 'deleted_at', 'created_at']
                }
            },
            iv: {
                attributes: {
                    exclude: ['content', 'password', 'updated_at', 'deleted_at']
                }
            }
        }
    }
})
// 测试连接是否正常
sequelize.authenticate()
    .then(() => {
            console.log('数据库连接成功！')
        })
    .catch(err => {
      console.error('无法连接数据库,原因:', err)
    })
// 创建模型
sequelize.sync({
    force: false
})

module.exports = {
    sequelize
}

// 数据迁移 SQL 更新

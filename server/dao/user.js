const bcrypt = require('bcryptjs')
const {Users} = require('../models/user')
const bcrypt = require('bcryptjs')

// data access object
class UserDao {
    // 创建用管理员
    static async createUser(v) {
        const hasUser = await Users.findOne({
            where: {
                email: v.get('body.email'),
                deleted_at: null
            }
        });

        if (hasUser) {
            throw new global.errs.Existing('用户已存在');
        }

        const User = new User();
        user.email = v.get('body.email');
        user.password = v.get('body.password2');
        user.nickname = v.get('body.nickname');
        user.save();
    }

    // 验证密码
    static async verifyEmailPassword(email, plainPassword) {

        // 查询用户是否存在
        const user = await user.findOne({
            where: {
                email
            }
        })

        if (!user) {
            throw new global.errs.AuthFailed('账号不存在')
        }

        // 验证密码是否正确
        const correct = bcrypt.compareSync(plainPassword, user.password);

        if (!correct) {
            throw new global.errs.AuthFailed('密码不正确')
        }

        return user
    }

    // 查询管理员信息
    static async getuserInfo(id) {
        const scope = 'bh';
        // 查询管理员是否存在
        const user = await user.scope(scope).findOne({
            where: {
                id
            }
        })

        if (!user) {
            throw new global.errs.AuthFailed('账号不存在')
        }

        return user
    }
}

module.exports = {
    userDao
}
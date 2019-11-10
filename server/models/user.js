const moment = require('moment');
const bcrypt = require('bcryptjs')
const {sequelize} = require('../core/db')
const {Sequelize, Model} = require('sequelize')

// 定义管理员模型
class User extends Model {

}
// 初始用户模型
User.init({

    users: {
        id: {type: 'string', maxlength: 24, nullable: false, primary: true},
        name: {type: 'string', maxlength: 191, nullable: false},
        slug: {type: 'string', maxlength: 191, nullable: false, unique: true},
        password: {type: 'string', maxlength: 60, nullable: false},
        email: {type: 'string', maxlength: 191, nullable: false, unique: true, validations: {isEmail: true}},
        profile_image: {type: 'string', maxlength: 2000, nullable: true},
        cover_image: {type: 'string', maxlength: 2000, nullable: true},
        bio: {type: 'text', maxlength: 65535, nullable: true, validations: {isLength: {max: 200}}},
        website: {type: 'string', maxlength: 2000, nullable: true, validations: {isEmptyOrURL: true}},
        location: {type: 'text', maxlength: 65535, nullable: true, validations: {isLength: {max: 150}}},
        facebook: {type: 'string', maxlength: 2000, nullable: true},
        twitter: {type: 'string', maxlength: 2000, nullable: true},
        accessibility: {type: 'text', maxlength: 65535, nullable: true},
        status: {type: 'string', maxlength: 50, nullable: false, defaultTo: 'active'},
        locale: {type: 'string', maxlength: 6, nullable: true},
        visibility: {
            type: 'string',
            maxlength: 50,
            nullable: false,
            defaultTo: 'public',
            validations: {isIn: [['public']]}
        },
        meta_title: {type: 'string', maxlength: 2000, nullable: true, validations: {isLength: {max: 300}}},
        meta_description: {type: 'string', maxlength: 2000, nullable: true, validations: {isLength: {max: 500}}},
        tour: {type: 'text', maxlength: 65535, nullable: true},
        last_seen: {type: 'dateTime', nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        created_by: {type: 'string', maxlength: 24, nullable: false},
        updated_at: {type: 'dateTime', nullable: true},
        updated_by: {type: 'string', maxlength: 24, nullable: true}
    },

    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        nullable:
    },
    // 管理员昵称
    nick_name: Sequelize.STRING,
    // 管理员邮箱
    email: {
        type: Sequelize.STRING(128),
        unique: true
    },
    // 密码
    password: {
        type: Sequelize.STRING,
        set(val) {
            // 加密
            const salt = bcrypt.genSaltSync(10);
            // 生成加密密码
            const psw = bcrypt.hashSync(val, salt);
            this.setDataValue("password", psw);
        }
    },
    created_at: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }
}, {
    sequelize,
    tableName: 'users'
})


module.exports = {
    User
}
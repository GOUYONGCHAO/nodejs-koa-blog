const moment = require('moment');
const {sequelize} = require('../core/db')
const {Sequelize, Model} = require('sequelize')

// 定义文章模型
class Article extends Model {
}

// 初始文章模型
Article.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment:"文章id"
    },
    // 文章标题
    title: {
        type:Sequelize.STRING,
        comment:"标题"
    },
    author_id: {
        type:Sequelize.INTEGER,
        comment: " 作者编号"
    },
    // 文章作者
    author: {
        type:Sequelize.STRING(64),
        comment: " 作者"
    },
    // 专栏编号
    special_column_id: {
        type:Sequelize.INTEGER,
        comment: "专栏编号"
    },
    // 文章内容
    content: {
        type:Sequelize.TEXT,
        comment: "文章内容"
    },
     // 文章浏览次数
    words: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"文章字数"
    },
    // 文章封面
    cover:{
        type:Sequelize.STRING,
        comment:"文章封面"
    } ,
    // 文章分类ID
    category_id:{
        type:Sequelize.STRING,
        comment:"文章分类ID"

    } ,
    // 阅读时间
    reading_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"阅读时间"
    },
     // 推荐文章
     featured: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        comment:"推荐文章"
    },
    // 文章浏览次数
    browse: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"文章浏览次数"
    },
    //喜欢数量
    like: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"喜欢数"
    },
    // 收藏数
    collections: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"收藏数"
    },
    //不喜欢数量
    dislike: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"不喜欢数"
    },
    //发布时间
    created_at: {
        type: Sequelize.DATE,
        comment:"发布时间",
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }, 
    //更新时间
    update_at: {
        type: Sequelize.DATE,
        comment:"更新时间",
        get() {
            return moment(this.getDataValue('update_at')).format('YYYY-MM-DD');
        }
    }, 
    deleted_at: {
        type: Sequelize.DATE,
        comment:"删除时间",
        get() {
            return moment(this.getDataValue('deleted_at')).format('YYYY-MM-DD');
        }
    }
}, {
    sequelize,
    tableName: 'article'
})

module.exports = {
    Article
}
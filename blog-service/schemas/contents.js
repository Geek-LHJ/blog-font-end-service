/* CreatBy LHJ on 18/8/29 */

var mongoose= require('mongoose');

// 文章的表结构
module.exports= new mongoose.Schema({
  // 关联字段——文章分类的 id ，可以通过 populate(category)把整条记录抽出来,而不仅仅是查询出id
  category: {
    // 类型
    type: mongoose.Schema.Types.ObjectId,
    //  引用
    ref: 'Category',
  },
  // 文章标题
  title: String,
  // 简介
  description: {
    type:String,
    default: '',
  },
  // 内容
  content: {
    type: String,
    default: '',
  },
  // 用户(直接通过请求传过去)
  user: {
    type: String,
    default: '',
    // type:mongoose.Schema.Types.ObjectId,
    // ref: 'User',
  },
  // 添加时间
  addTime: {
    type: Date,
    default: new Date(),
  },
  // 阅读量
  views: {
    type: Number,
    default: 0,
  },
  // 评论
  comments: {
    type: Array,
    default: [],
  }
})
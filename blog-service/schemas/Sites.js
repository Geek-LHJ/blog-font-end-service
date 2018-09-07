/* CreatBy LHJ on 18/8/29 */

var mongoose= require('mongoose');

// 用户的表结构
module.exports= new mongoose.Schema({
  // 名称
  name: String,
  // Icon
  icon: String,
  // URL
  url: String,
});
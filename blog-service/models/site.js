/* CreatBy LHJ on 18/8/29 */

var mongoose= require('mongoose');
var siteSchema= require('../schemas/sites');

module.exports= mongoose.model('Site', siteSchema);
const mongoose = require("mongoose");

const _TheSchematable = new mongoose.Schema({
item:{
 type:String,require:true,

}
,

price:{
    type:String,require:true,
   
}


});
const TheSchematable = mongoose.model("TheSchematable",_TheSchematable);

module.exports = TheSchematable;
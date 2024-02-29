const mongoose = require("mongoose");
const TheSchemaTable = require("./models/TheSchemaTable");
require("dotenv").config();
mongoose.connect(process.env.URI)
.then(()=>{
console.log("YOU ARE CONNECTED TO MONGOOSE");

})
.catch(error=>{

    console.log(error);
});


const INSERTINTO = [

{
item: "Tim"

},
{
    price: "Kim"
    
    }
]



TheSchemaTable.insertMany(INSERTINTO)
.then((res)=>{
console.log(res);

})
.catch(error=>{
console.log(error);


});
const dbConnect = require("./mongodb");


const UpdateData = async()=>{
    const data  = await dbConnect();
    const result  =await  data.updateMany(
        // Objectname 
        {name:'nord5'},
        // object to update
        {$set:{name:"MaxPro16"}}
    )
    console.log(result);

 

}
UpdateData()
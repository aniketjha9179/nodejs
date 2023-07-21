const dbConnect = require("./mongodb");

const deleteData =async () => {
    const data =await  dbConnect()
    const result = await data.deleteMany({
        name:'MaxPro11'
    }) 
    console.log(result);
    if(result.acknowledged){
        console.log('record deleted');
    }

}
deleteData();
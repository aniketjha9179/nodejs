const fs = require('fs')

const path = require('path')
const dirpath = path.join(__dirname, 'crud')
const filePath = `${dirpath}/apple.txt` 

//creating file 
fs.writeFileSync(filePath,'this is simple file') 

// reading file content 

// fs.readFile(filePath,'utf-8' ,(err, item)=>{
//   console.log(item);
// })

//UPDATING FILE CONTENETS 

// fs.appendFile(filePath, ' , and file name is banana.txt', (err)=>{
//   if(!err) console.log('file is updated');
// })

//RENAME FILE OPERATION 


// fs.rename(filePath, `${dirpath}/milk.txt`,(err)=>{
//     if(!err) console.log('file is Renamed');

// }  )


//DELETING FILE IN NODE JS

// fs.unlinkSync(`${dirpath}/milk.txt` ) 
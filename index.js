let a = 20 ;
let b =0 ;


let waitingData =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
    
})
waitingData.then((b)=>{

    console.log(a+b);

})
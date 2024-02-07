function mutliply(number){
    return new Promise((resolve,reject)=>{
        if(typeof number !="number"){
            reject ( new Error("somthing is wrong here"))
        }else{
            const result = number *5
            resolve(result)
        }
    })
}


mutliply(50).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})
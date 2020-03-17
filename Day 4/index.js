// fetching user info.

const userData = () => {
    //db query
    return {
        userName: "Imad Ahmed",
        email: "imad@gmail.com",
        success: false
    }
}

// const fetchData = (error, cb) => {
//     //fetching user data
//     setTimeout(() => {
//         const response = userData();
//         if(response.success){
//             cb(response)
//         }else{
//             console.log("Error occured")
//             error("Error occured")
//         }
//     }, 3000)
// }

// const func2 = (data) =>{
//     console.log(data)
// }

// const error = (err) => {
//     console.log(err)
// }
// fetchData(error, func2);

// const fetchData = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         const response =  userData()
//         if(response.success){
//             resolve(response)
//         }else{
//             reject("Error Occured!")
//         }
//     }, 3000)
// })

// fetchData
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function fetchData() {
    try {
        const data = await userData()
        if(data.success){
            console.log(data)
        }else{
            throw new Error("Error occured!")
        }
    } catch (err) {
        console.log(err)
    }
}

fetchData();
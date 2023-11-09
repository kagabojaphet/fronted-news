const idparams=window.location.href.split("?id=")[1]
const infor = document.querySelector(".infor")

fetch(`https://motionless-lime-marlin.cyclic.app/api/v1/user/${idparams}`)
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data)
   
        infor.innerHTML =`
        
        <p>${data.data.firstname}</p>
        <p>${data.data.lastname}</p>
        <p>${data.data.email}</p>
        <p>${data.data.password}</p>
        <p>$${data.data.createdate}</p>
        <p>gjhjh</p> 
        `
})
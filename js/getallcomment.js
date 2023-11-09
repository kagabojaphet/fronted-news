const token=window.localStorage.getItem("token")
const table=document.querySelector(".tables")

fetch(`https://wild-vest-eel.cyclic.app/api/v1/comment`,{
    headers:{
        "kiki-token":token,
    }

})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
    data.data.map((data,index)=>{
        table.innerHTML+=`
        <tr>
        <th>${index+1}</th>
        <th>${data._id}</th>
        <th>${data.user._id}</th>
        <th>${data.user.firstname}</th>
        <th>${data.user.lastname}</th>
        <th>${data.user.email}</th>
        <th>${data.comment}</th>
        <th>${data.postedat}</th>
        <th><a href="">delete</a></th>
        </tr>`
    })
})
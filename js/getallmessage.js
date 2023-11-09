const token=window.localStorage.getItem("token");
const table=document.querySelector(".tables");

fetch(`https://wild-vest-eel.cyclic.app/api/v1/message`,{
    headers:{
        "kiki-token":token,
    },
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    data.data.map((data,index)=>{
        table.innerHTML+=`
        <tr>
        <td>${index+1}</th>
        <th>${data._id}</th>
        <th>${data.email}</th>
        <th>${data.message}</th>
        <th><a href="">delete</a></th>
        </tr>`
    })
})
const token=window.localStorage.getItem("token");
const table=document.querySelector(".tables");

fetch(`https://wild-vest-eel.cyclic.app/api/v1/category`,{
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
        <th>${data.categoryname}</th>
        <th><a href="">delete</a></th>
        <th><a href="">update</a></th>
        </tr>`
    })
})
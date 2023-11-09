const token=window.localStorage.getItem("token");
const Params=window.location.href.split("?id=")[1]

const container=document.querySelector(".formComment");
container.addEventListener("submit",(e)=>{
    
    e.preventDefault()

    const inputdata=document.querySelector(".input-field").value;
    let data={
        comment:inputdata
    }

    
    const api=`https://wild-vest-eel.cyclic.app/api/v1/comment/${Params}`
    const setPostman={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "kiki-token":token
        },
        body:JSON.stringify(data)
    };
    fetch(api,setPostman)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        alert(data.message)
    })
    .catch((err)=>{
        alert(err)
    })
    
})
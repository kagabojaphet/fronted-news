function dislike(){
    const dislikeparams=window.location.href.split("?id=")[1];
    const token=window.localStorage.getItem("token");

    const api=`https://motionless-lime-marlin.cyclic.app/api/v1/news/dislike/${dislikeparams}`
    const setPostman={
        method:"PUT",
        headers:{
            "kiki-token":token
        }
    };
    fetch(api,setPostman)

    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        alert(data.message)
    })
    .catch((err)=>{
        alert((err))
    })
}


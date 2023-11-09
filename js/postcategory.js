const token=window.localStorage.getItem("token");
const category=document.querySelector(".signup");

category.addEventListener("submit",(e)=>{
    e.preventDefault()

    const categoryname=document.querySelector("#category").value;

    const datas={
        categoryname:categoryname.value,
    }

    const api=`https://wild-vest-eel.cyclic.app/api/v1/category`
    const setpostman={
        method:'POST',

        Headers:{
            "kiki-token":token
        },

        body:JSON.stringify(datas)
    
};
fetch(api,setpostman)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    alert(data.message)
})
.catch((err)=>{
    console.log(err)
})
})

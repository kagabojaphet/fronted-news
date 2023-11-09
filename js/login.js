const login=document.querySelector(".login")

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    const data={
        email,
        password,
    };

    const api = `https://wild-vest-eel.cyclic.app/api/v1/user/login`
    const setpostman={
        method:`POST`,
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
    };
    fetch(api,setpostman)

    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        if(data.token){
            const token = data.token;
            localStorage.setItem("token",token);
            if(data.data.user.role=="admin"){
              alert("admin");
            }
            else{
                window.location.href="./index.html";
            }
        }
        else{
            alert(data.message);
        }
    })
    .catch((err)=>{
        alert(err)
    })
    
})

const password=document.querySelector("#password");
const eyestoggle=document.querySelector("#eyestoggle");

eyestoggle.addEventListener("click",function(){
    if(password.type=="password"){
        password.type="text;"

        eyestoggle.className="fas fa-eye";
    }
    else{
        password.type="password";
        eyestoggle.className ="fas fa-eye-slash";
    }
});